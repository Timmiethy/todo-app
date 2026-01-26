import {ClipboardList, Clock, CheckCircle2} from 'lucide-react'
import StatsCard from '../ui/StatsCard'
import { type Task } from '../../types'
import TaskCard from '../tasks/TaskCard'

interface MainContentProps {
    taskCount: number,
    toDoCount: number,
    doneCount: number,
    tasks: Task[],
    toggleStatus: (task: Task) => void,
    deleteTask: (task: Task) => void
}

const MainContent = ({taskCount, toDoCount, doneCount, tasks, toggleStatus, deleteTask} : MainContentProps) => {
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
            <div className="flex flex-col gap-3">
                {tasks.map(task => (
                    <div key={task.id}>
                    <TaskCard task={task} toggleStatus={toggleStatus} deleteTask={deleteTask}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainContent;