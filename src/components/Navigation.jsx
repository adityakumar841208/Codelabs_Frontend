import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'


const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed border-r-2 border-gray-800 min-h-screen w-56 h-full overflow-y-auto bg-gray-900 text-white">
            <ul className="space-y-1">
                <li className="flex items-center space-x-3 px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home')}>
                    <AccountCircleIcon className="text-white text-3xl border border-primary rounded-full" fontSize="large" />
                    <span className="text-white">User Profile</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home/services')}>
                    <span className="text-white">Services</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home/feedback')}>
                    <span className="text-white">Feedback</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/home/help')}>
                    <span className="text-white">Help</span>
                </li>
                <li className="px-4 py-2 rounded-sm hover:bg-primaryHover transition duration-300 ease-in-out cursor-pointer" onClick={()=>navigate('/')}>
                    <span className="text-red-500 text-bold">Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
