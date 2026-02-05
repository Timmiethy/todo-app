import {Inbox, Calendar, Star, CheckCircle2, Plus, Check} from 'lucide-react'
import {Tab} from '../../types'

export interface SideBarProps{
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
    taskCount: number;
    taskDoneCount: number;
    todayCount: number;
    priorityCount: number;
    createTask: () => void;
}

export default function SideBar({
    activeTab,
    setActiveTab,
    taskCount,
    taskDoneCount,
    createTask,
    todayCount,
    priorityCount
} : SideBarProps){

const navigationItems = [
    { name: 'Inbox', icon: Inbox, count: taskCount},
    { name: 'Today', icon: Calendar, count: todayCount},
    { name: 'Priority', icon: Star, count: priorityCount},
    { name: 'Completed', icon: CheckCircle2, count: taskDoneCount}
] as const

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col py-6 px-4 border-r 
        border-slate-300">

            {/* Title  Logo + DevTodo*/}
            <div className="flex items-center gap-2 pb-6">
                <div className="h-9 w-9 rounded-xl bg-blue-700 flex items-center 
                justify-center">
                    <CheckCircle2 className="text-white"/>
                </div>
                <h2 className="text-2xl font-bold">DevTodo</h2>
            </div>

            {/* Button new tasks */}
            <div className="flex items-center pb-6">
                <button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 flex w-full gap-2 
                items-center rounded-xl text-white py-2.5 px-3 hover:from-blue-700 
                hover:to-blue-800 duration-250 transition-colors active:from-blue-500 
                active:to-blue-600"
                onClick={createTask}>
                    <Plus size={18}/>
                    <span className="text-sm font-semibold">New Task</span>
                </button>
            </div>

            {/* nav bar */}
            <nav className="w-full flex flex-col px-2 gap-1">
                {navigationItems.map((item) => (
                    // each tab box
                    <div
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`flex items-center justify-between rounded-lg px-2 py-2 cursor-pointer
                            ${activeTab === item.name ? 'bg-slate-200 text-blue-600 font-medium' : 'hover:bg-slate-100 text-slate-600'} 
                            transition-all duration-250 group`}
                    >
                        {/* tab logo and name */}  
                        <div className="flex gap-3 items-center">
                            <item.icon className={`size-5 
                                ${activeTab === item.name ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`}/>
                            <span className="text-sm">{item.name}</span>
                        </div>
                        {/* count */}
                        {item.count > 0 && <span className="flex w-5 h-5 text-xs items-center 
                        justify-center text-slate-600 bg-slate-200 rounded-full transition-colors 
                        duration-200">{item.count}</span>}
                    </div>
                ))}
            </nav>
        </aside>
    )
}