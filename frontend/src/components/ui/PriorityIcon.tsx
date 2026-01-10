import {TaskPriority} from '../../types'

interface PriorityIconProps {
    priority: TaskPriority;
}

const PriorityIcon = ({ priority } : PriorityIconProps) => {
    switch (priority){
        case TaskPriority.HIGH:
            return (
                <div className="flex items-center text-red-600 gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span className="text-xs font-semibold">
                        High
                    </span>
                </div>
            )
        case TaskPriority.MEDIUM:
            return (
                <div className="flex items-center text-orange-600 gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    <span className="text-xs font-semibold">
                        Medium
                    </span>
                </div>
            )
       case TaskPriority.LOW:
            return (
                <div className="flex items-center text-blue-600 gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-xs font-semibold">
                        Low
                    </span>
                </div>
            )
    }
}

export default PriorityIcon;