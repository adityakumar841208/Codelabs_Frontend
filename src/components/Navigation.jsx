import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'


const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed border-r-2 border-gray-800 min-h-screen w-56 h-full overflow-y-auto bg-slate-200 text-black">
            <ul className="space-y-1">
                <li className="flex items-center space-x-3 px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home/profile')}>
                    <AccountCircleIcon className="text-black text-3xl border border-primary rounded-full" fontSize="large" />
                    <span className="text-black">User Profile</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home')}>
                    <span className="text-black">Dashboard</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home/services')}>
                    <span className="text-black">Services</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home/feedback')}>
                    <span className="text-black">Feedback</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home/help')}>
                    <span className="text-black">Help</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/')}>
                    <span className="text-red-500 text-bold">Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;