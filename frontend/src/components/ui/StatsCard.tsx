import {type LucideIcon} from 'lucide-react'

interface StatsCardProps {
    name: string,
    count: number,
    Icon: LucideIcon,
    bgColor: string,
    textColor: string
}

const StatsCard = ({name, count, Icon, bgColor, textColor} : StatsCardProps) => {
    return (
        <div 
        className="rounded-xl border border-slate-200 shadow-sm p-5 flex items-center justify-between">
            <div>
                <p className="text-slate-500 text-sm">{name}</p>
                <p className="text-2xl text-black font-bold">{count}</p>
            </div>
            <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${bgColor}`}>
                <Icon size={24} className={textColor}/>
            </div>
        </div>
    )
}

export default StatsCard;