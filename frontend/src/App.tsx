import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './components/layout/SideBar'
import {TaskStatus, TaskPriority, type Task, Tab} from './types'

import './App.css'  

function App() {

  const mockData : Task[] = [
    {
      id: '1',
      title: 'K.C',
      description: 'add students',
      status: TaskStatus.TODO,
      priority: TaskPriority.HIGH,
      tags: ['work', 'income'],
      dueDate: '2026-01-10',
    },
    {
      id: '2',
      title: 'OPC',
      description: 'design slides',
      status: TaskStatus.TODO,
      priority: TaskPriority.HIGH,
      tags: ['school', 'education'],
      dueDate: '2026-01-07',
    }
  ]

  const [activeTab, setActiveTab] = useState<Tab>('Inbox');
  const [tasks, setTasks] = useState<Task[]>(mockData);
  const toDoCount = mockData.filter(task => task.status === TaskStatus.TODO).length;
  const doneCount = mockData.filter(task => task.status === TaskStatus.DONE).length;
  

  const createTask = () => {
    return(
      <>
      </>
    )
  }

  return(
    <div className="min-h-screen flex bg-slate-50">
      <SideBar 
      activeTab = {activeTab}
      setActiveTab = {setActiveTab}
      taskCount = {toDoCount}
      taskDoneCount = {doneCount}
      createTask = {createTask}
      />
    </div>
  )
}

export default App
