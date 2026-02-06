import {CheckCircle2, Trash2, Calendar} from 'lucide-react'
import {type Task} from '../../types'
import { TaskStatus } from '../../types'
import PriorityIcon from '../ui/PriorityIcon'
import StatusBadge from '../ui/StatusBadge'


interface TaskCardProps {
    task: Task,
    toggleStatus: (task: Task) => void,
    deleteTask: (task: Task) => void
}

const TaskCard = ({task, toggleStatus, deleteTask} : TaskCardProps) => {
    const isDone = (task.status === TaskStatus.DONE)
    return (
        // the parent card
        <div className='flex items-center rounded-xl px-4 py-6 bg-white border border-slate-200
        shadow-sm group hover:border-blue-200 hover:shadow-md transition-all gap-4'>
            
            {/* the check button */}
            <button className={`flex flex-shrink-0 w-6 h-6 rounded-full text-white border-2 
            ${isDone ? 'bg-green-500 border-green-500' : 'border-slate-300 hover:border-blue-500'}
            items-center justify-center`}
                    onClick={() => toggleStatus(task)}>
                <CheckCircle2 size={14}/>
            </button>
            
            {/* title and description */}
            <div className='flex-1 min-w-0'>
                <div className='flex gap-4 items-center mb-1'>
                    <h3 className={`font-semibold text-black truncate ${isDone ? 'line-through' : ''}`}>
                        {task.title}
                    </h3>
                    <StatusBadge status={task.status}/>
                    <div className='w-px h-4 bg-slate-300'></div>
                    <span className='text-slate-500 text-sm truncate'>
                        {task.description}
                    </span>
                </div>
            </div>

            {/* task meta (priority, date) */}
            <div className='flex gap-4 items-center'>
                <PriorityIcon priority={task.priority}/>
                <div className='w-px h-4 bg-slate-300'></div>
                <div className='flex items-center gap-1.5 w-50'>
                    <Calendar size={16} className='text-slate-400'/>
                    <span className='text-slate-500 text-sm'>{task.dueDate}</span>
                </div>
            </div>

            {/* delete button */}
            <button
                onClick={() => deleteTask(task)}
                className='text-white group-hover:text-slate-300 p-2 hover:bg-red-50 hover:text-red-500
                rounded-lg'>
                <Trash2 size={18}/>
            </button>
        </div>
    )
}

export default TaskCard;