import {Tab} from '../../types.ts'
import {useState, useEffect} from 'react'

interface HeaderProps {
    activeTab : Tab;
}
const Header = ({activeTab} : HeaderProps) => {
    // date state
    const [date, setDate] = useState(new Date())

    // update date every one minute
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    // format date
    const formattedDate = date.toLocaleDateString(
        'en-US',
        {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        }
    )

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
                    {formattedDate}
                </span>
            </div>

            {/* search bar */}
            <div className="flex gap-3 ">

            </div>

            
            
        </header>
    )
}
export default Header;