import {ClipboardList, Clock, CheckCircle2} from 'lucide-react'
import StatsCard from '../ui/StatsCard'
import { TaskPriority, TaskStatus, type Task } from '../../types'
import TaskCard from '../tasks/TaskCard'
import { type Tab } from '../../types'

interface MainContentProps {
    taskCount: number,
    toDoCount: number,
    doneCount: number,
    tasks: Task[],
    activeTab: Tab,
    today: string,
    updateTasks: (tasks: Task[]) => void,
    toggleStatus: (task: Task) => void,
    deleteTask: (task: Task) => void
}

const MainContent = ({taskCount, toDoCount, doneCount, activeTab, tasks, today, updateTasks, toggleStatus, deleteTask} : MainContentProps) => {
    const statsItem = [
        {
            name: 'Total Tasks',
            count: taskCount,
            icon: ClipboardList,
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-500'
        },
        {
            name: 'To Do',
            count: toDoCount,
            icon: Clock,
            bgColor: 'bg-red-100',
            textColor: 'text-red-500'
        },
        {
            name: 'Completed',
            count: doneCount,
            icon: CheckCircle2,
            bgColor: 'bg-green-100',
            textColor: 'text-green-500'
        }
    ]

    // filter displayed tasks
    let displayedTasks = tasks;
    if (activeTab === 'Today') {
        displayedTasks = tasks.filter(task => task.dueDate === today);
    }
    if (activeTab === 'Priority'){
        displayedTasks = tasks.filter(task => task.priority === TaskPriority.HIGH)
    }
    if (activeTab === 'Completed'){
        displayedTasks = tasks.filter(task => task.status === TaskStatus.DONE)
    }
    displayedTasks = [...displayedTasks].sort((a, b) => {
        const isADone = a.status === 'DONE';
        const isBDone = b.status === 'DONE';
        if (isADone && !isBDone) return 1;
        if (!isADone && isBDone) return -1;
        return 0;
    })

    return (
        // container
        <div className="p-8 min-h-screen">
            {/* stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {statsItem.map(item => (
                    <div key={item.name}>
                    <StatsCard name={item.name}
                    count={item.count}
                    Icon={item.icon}
                    textColor={item.textColor}
                    bgColor={item.bgColor}/>
                    </div>
                    ))
                }
            </div>

            {/* task card test */}
            <div className="flex flex-col gap-3 mt-12">
                {displayedTasks.map(task => (
                    <div key={task.id}>
                    <TaskCard task={task} toggleStatus={toggleStatus} deleteTask={deleteTask}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainContent;