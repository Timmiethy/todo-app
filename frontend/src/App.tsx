import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './components/layout/SideBar'
import {TaskStatus, TaskPriority, type Task, Tab} from './types'
import CreateTaskModal from './components/tasks/CreateTaskModal'

import './App.css'  
import Header from './components/layout/Header'
import MainContent from './components/layout/MainContent'

function App() {

  const mockData : Task[] = [
    {
      id: '1',
      title: 'K.C',
      description: 'add students',
      status: TaskStatus.TODO,
      priority: TaskPriority.HIGH,
      tags: ['work', 'income'],
      dueDate: '10/01/2026',
    },
    {
      id: '2',
      title: 'OPC',
      description: 'design slides',
      status: TaskStatus.TODO,
      priority: TaskPriority.HIGH,
      tags: ['school', 'education'],
      dueDate: '07/01/2026',
    },
    {
      id: '3',
      title: 'School',
      description: 'soan report',
      status: TaskStatus.TODO,
      priority: TaskPriority.MEDIUM,
      tags: ['school', 'gpa'],
      dueDate: '09/01/2026'
    }
  ]

  // get today date
  const today = new Date().toISOString().split('T')[0];
  
  const [activeTab, setActiveTab] = useState<Tab>('Inbox');
  const [tasks, setTasks] = useState<Task[]>(mockData);
  const taskCount = tasks.length;
  const toDoCount = tasks.filter(task => task.status === TaskStatus.TODO).length;
  const doneCount = tasks.filter(task => task.status === TaskStatus.DONE).length;
  const todayCount = tasks.filter(task => task.dueDate === today).length;
  const priorityCount = tasks.filter(task => task.priority === TaskPriority.HIGH).length;
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState<boolean>(false);
  
  // toggle CreateTaskModal
  const openCreateTaskModal = () => {
    setIsCreateTaskModalOpen(true)
    console.log("CreateTaskModal:", true)
  };
  const closeCreateTaskModal = () => {
    setIsCreateTaskModalOpen(false)
  }

  // toggle TaskStatus
  const toggleTaskStatus = (targetTask: Task) => {
    setTasks(currentTasks => currentTasks.map(task => {
      if(task.id === targetTask.id) {
        return {
          ...task,
          status: (task.status === TaskStatus.DONE ? TaskStatus.TODO : TaskStatus.DONE)
        };
      }
      return task;
    })
    );
  }

  // delete Task logic
  const deleteTask = (targetTask: Task) => {
    setTasks(
      currentTasks => currentTasks.filter(
        task => (
          task.id !== targetTask.id
        )
      )
    )
  }

  // submit task logic
  const handleSubmitNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const maxId = tasks.length > 0 ? 
      Math.max(...tasks.map(task => parseInt(task.id))) : 0
    const newTaskId = (maxId + 1).toString();

    // newTask object
    const newTask = {
      id: newTaskId,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      status: TaskStatus.TODO,
      priority: formData.get('priority') as TaskPriority,
      tags: ['General'],
      dueDate: formData.get('date') as string
    }
    const newTasks = tasks.concat(newTask);
    setTasks(newTasks);
    closeCreateTaskModal();
  }

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

        <MainContent taskCount={taskCount} toDoCount={toDoCount} 
        doneCount={doneCount} tasks={tasks} toggleStatus={toggleTaskStatus}
        deleteTask={deleteTask} activeTab={activeTab} updateTasks={() => setTasks} today={today}/>
      </div>
    </div>
  )
}

export default App
