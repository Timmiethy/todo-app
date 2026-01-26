import {Tab, dateString} from '../../types.ts'
import {Search} from 'lucide-react'

interface HeaderProps {
    activeTab : Tab;
}
const Header = ({activeTab} : HeaderProps) => {
    return (
        <header className="p-6 w-full h-16 flex items-center justify-between border-b border-slate-300 z-10 sticky">
            <div className="flex gap-3 items-center ">
                <span className="text-2xl font-bold ">
                    {activeTab}
                </span>
                <span className="text-slate-200 text-xl">
                    |
                </span>
                <span className="text-slate-500 text-sm">
                    {dateString}
                </span>
            </div>
            
            {/* search bar */}
            <div className="flex gap-3 ">

            </div>
            
        </header>
    )
}
export default Header;