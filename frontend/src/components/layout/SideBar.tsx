import {Inbox, Calendar, Star, CheckCircle2, Plus, Check} from 'lucide-react'
import {Tab} from '../../types'

export interface SideBarProps{
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
    taskCount: number;
    taskDoneCount: number;
    createTask: () => void;
}

export default function SideBar({
    activeTab,
    setActiveTab,
    taskCount,
    taskDoneCount,
    createTask
} : SideBarProps){

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col p-6 border-r border-slate-300">
            <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-blue-700 flex items-center justify-center">
                    <CheckCircle2 className="text-white"/>
                </div>
                <h2 className="text-2xl font-bold">DevTodo</h2>
            </div>
        </aside>
    )
}