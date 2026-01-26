import Badge from "./Badge";
import { TaskStatus } from "../../types";

interface StatusBadgeProps {
    status: TaskStatus
}

const StatusBadge = ({status} : StatusBadgeProps) => {
    switch (status){
        case TaskStatus.DONE:
            return (
                <Badge name={TaskStatus.DONE} color='bg-green-200 text-green-700'/>
            )
        case TaskStatus.IN_PROGRESS:
            return (
                <Badge name={TaskStatus.IN_PROGRESS} color='bg-yellow-200 text-yellow-700'/>
            )
        case TaskStatus.TODO:
            return (
                <Badge name={TaskStatus.TODO} color='bg-red-200 text-red-700'/>
            )
    }
}

export default StatusBadge;