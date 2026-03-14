import { Shield, ChevronLeft, ChevronRight, Settings, LayoutDashboard, FileSpreadsheet, UsersRound, Wrench, BellRing, UserRoundCog } from "lucide-react";
import { useState } from "react";
const SideBar = () => {
    const [sideBarExtended, setSideBarExtended] = useState(false);

    const toggleSideBar = () => {
        setSideBarExtended(prev => !prev);
    };

    const sideBarLinks = [
        {key: 'Link01', title: 'Dashboard Overview', icon: <LayoutDashboard/>},
        {key: 'Link02', title: 'Service Request', icon: <FileSpreadsheet />},
        {key: 'Link03', title: 'Broadcasts', icon: <BellRing />},
        {key: 'Link04', title: 'Residents', icon: <UsersRound />},
        {key: 'Link05', title: 'Service Categories', icon: <Wrench />},
        {key: 'Link06', title: 'Admin Management', icon: <UserRoundCog />},
        {key: 'Link07', title: 'Settings', icon: <Settings />},
    ];

    const linkElements = sideBarLinks.map(link => {
        return (
            <button className="text-white w-full p-3 rounded-md hover:bg-forest flex gap-5" 
                key={link.key}>
                    {link.icon}
                    <p className={`${sideBarExtended ? "flex" : "hidden"}`}>{link.title}</p>
            </button>
        );
    });

    return(
        <aside className={`flex flex-col gap-2 bg-black ${sideBarExtended ? "w-[14%]" : "w-[3%]"} h-screen transition-all`}>
            <div className="flex justify-between items-center p-3">
                <div className="flex gap-3 items-center">
                    <div className="bg-sky p-1 rounded-xl cursor-pointer" onClick={toggleSideBar}>
                        <Shield color="white"/>  
                    </div>
                    <h1 className={`font-semibold text-white ${sideBarExtended ? "flex" : "hidden"}`}>GV Admin</h1>
                </div>
                <div className={`hover:bg-slate-400 rounded-md p-1 cursor-pointer ${sideBarExtended ? "flex" : "hidden"}`}
                    onClick={toggleSideBar}>
                        <ChevronLeft color="gray" size={15}/>
                </div>
            </div>
            <hr className="border-slate-400"/>
            <div className="flex flex-col gap-1 p-2">
                {linkElements}
            </div>
        </aside>
    );
};

export default SideBar;