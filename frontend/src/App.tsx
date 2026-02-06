import { useState, useEffect } from 'react'
import SideBar from './components/layout/SideBar'
import {TaskStatus, TaskPriority, type Task, Tab} from './types'
import CreateTaskModal from './components/tasks/CreateTaskModal'

import './App.css'  
import Header from './components/layout/Header'
import MainContent from './components/layout/MainContent'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // get today date (Local Time YYYY-MM-DD)
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  const [activeTab, setActiveTab] = useState<Tab>('Inbox');

  // Fetch tasks from backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const taskCount = tasks.length;
  const toDoCount = tasks.filter(task => task.status === TaskStatus.TODO).length;
  const doneCount = tasks.filter(task => task.status === TaskStatus.DONE).length;
  const todayCount = tasks.filter(task => task.dueDate === today).length;
  const priorityCount = tasks.filter(task => task.priority === TaskPriority.HIGH).length;
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState<boolean>(false);
  
  // toggle CreateTaskModal
  const openCreateTaskModal = () => {
    setIsCreateTaskModalOpen(true)
  };
  const closeCreateTaskModal = () => {
    setIsCreateTaskModalOpen(false)
  }

  // toggle TaskStatus
  const toggleTaskStatus = async (targetTask: Task) => {
    const taskId = targetTask.id || (targetTask as any)._id;
    const newStatus = targetTask.status === TaskStatus.DONE ? TaskStatus.TODO : TaskStatus.DONE;
    
    try {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const updatedTask = await response.json();

      setTasks(currentTasks => currentTasks.map(task => {
        const currentId = task.id || (task as any)._id;
        const updatedId = updatedTask.id || updatedTask._id;
        if(currentId === updatedId) {
          return updatedTask;
        }
        return task;
      }));
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  }

  // delete Task logic
  const deleteTask = async (targetTask: Task) => {
    const taskId = targetTask.id || (targetTask as any)._id;
    try {
      await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'DELETE',
      });
      setTasks(currentTasks => currentTasks.filter(task => (task.id || (task as any)._id) !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  // submit task logic
  const handleSubmitNewTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newTaskData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: TaskStatus.TODO,
      priority: formData.get('priority') as TaskPriority,
      tags: ['General'],
      dueDate: formData.get('date') as string
    }

    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTaskData),
      });
      const savedTask = await response.json();
      setTasks(current => [...current, savedTask]);
      closeCreateTaskModal();
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Error saving task!");
    }
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return(
    <div className="min-h-screen flex bg-slate-50">
      <SideBar 
      activeTab = {activeTab}
      setActiveTab = {setActiveTab}
      taskCount = {toDoCount}
      taskDoneCount = {doneCount}
      createTask = {openCreateTaskModal}
      todayCount = {todayCount}
      priorityCount = {priorityCount}
      />

      {isCreateTaskModalOpen && 
       <CreateTaskModal 
          isOpen={isCreateTaskModalOpen}
          onClose={closeCreateTaskModal}
          onSubmit={handleSubmitNewTask} />}

      <div className="flex-1 flex flex-col"> 
        <Header
        activeTab = {activeTab}/>

        <MainContent 
        taskCount={taskCount} 
        toDoCount={toDoCount} 
        doneCount={doneCount} 
        tasks={tasks} 
        toggleStatus={toggleTaskStatus}
        deleteTask={deleteTask} 
        activeTab={activeTab} 
        updateTasks={() => setTasks} 
        today={today}/>
      </div>
    </div>
  )
}

export default App