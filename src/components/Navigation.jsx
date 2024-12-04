import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if a route is active
  const isActive = (path) => {
    if (path === '/home') {
      return location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };


  return (
    <div className="sticky w-4/5 md:w-full m-auto top-0 p-4 overflow-y-auto bg-gray-800 text-white min-h-screen">
      {/* Logo and Tagline */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-3xl font-bold tracking-wide">
          Code<span className="text-blue-600">Labs</span>
        </h1>
        <p className="text-xs md:text-sm mt-1 md:mt-2 italic text-gray-400">For the Devs, By the Devs</p>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-3">

        {/* Links */}
        {[
          { path: '/home', icon: <ExploreIcon fontSize="small" />, label: 'Explore' },
          { path: '/home/courses', icon: <SchoolIcon fontSize="small" />, label: 'Courses' },
          { path: '/home/community', icon: <PeopleIcon fontSize="small" />, label: 'Community' },
          { path: '/home/services', icon: <BuildIcon fontSize="small" />, label: 'Services' },
          { path: '/home/feedback', icon: <FeedbackIcon fontSize="small" />, label: 'Feedback' },
          { path: '/home/help', icon: <HelpOutlineIcon fontSize="small" />, label: 'Help' },
        ].map((item) => (
          <li
            key={item.path}
            className={`flex items-center gap-3 md:gap-4 px-3 md:px-4 py-1.5 md:py-2 rounded-xl cursor-pointer text-sm md:text-base ${isActive(item.path) ? 'bg-blue-700 text-white' : 'hover:bg-gray-700'
              }`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}

        {/* Logout */}
        <li
          className="flex items-center gap-3 md:gap-4 px-3 md:px-4 py-1.5 md:py-2 rounded-xl cursor-pointer text-sm md:text-base text-red-600 bg-gray-800 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
          onClick={() => navigate('/')}
        >
          <ExitToAppIcon fontSize="small" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
