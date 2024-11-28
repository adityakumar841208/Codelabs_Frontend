import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sticky top-2 bg-none rounded-xl p-2 overflow-y-auto text-black">
      <ul className="space-y-2">
        {/* Search Bar */}
        <div className="flex items-center shadow-md justify-center rounded-lg bg-gray-100 border border-gray-300 overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-full shadow-lg px-4 py-2 bg-transparent focus:outline-none text-black"
            // style={{
            //   boxShadow: 'inset 0 -4px 6px rgba(0, 0, 0, 0.2)',
            // }}
          />
          <div className=" p-2 rounded-r-md cursor-pointer hover:bg-gray-50 h-10 text-black">
            <SearchIcon />
          </div>
        </div>

        {/* Navigation Links */}
        <li
          className={`px-4 py-2 shadow-sm rounded-xl cursor-pointer ${
            isActive('/home') ? 'bg-blue-700 text-white' : 'bg-white hover:bg-gray-200'
          }`}
          onClick={() => navigate('/home')}
        >
          <span>Explore</span>
        </li>
        <li
          className={`px-4 py-2 shadow-sm rounded-xl cursor-pointer ${
            isActive('/home/courses') ? 'bg-blue-700 text-white' : 'bg-white hover:bg-gray-200'
          }`}
          onClick={() => navigate('/home/courses')}
        >
          <span>Courses</span>
        </li>
        <li
          className={`px-4 py-2 shadow-sm rounded-xl cursor-pointer ${
            isActive('/home/community') ? 'bg-blue-700 text-white' : 'bg-white hover:bg-gray-200'
          }`}
          onClick={() => navigate('/home/community')}
        >
          <span>Community</span>
        </li>
        <li
          className={`px-4 py-2 shadow-sm rounded-xl cursor-pointer ${
            isActive('/home/services') ? 'bg-blue-700 text-white' : 'bg-white hover:bg-gray-200'
          }`}
          onClick={() => navigate('/home/services')}
        >
          <span>Services</span>
        </li>
        <li
          className={`px-4 py-2 shadow-sm rounded-xl cursor-pointer ${
            isActive('/home/feedback') ? 'bg-blue-700 text-white' : 'bg-white hover:bg-gray-200'
          }`}
          onClick={() => navigate('/home/feedback')}
        >
          <span>Feedback</span>
        </li>
        <li
          className={`px-4 py-2 shadow-sm rounded-xl cursor-pointer ${
            isActive('/home/help') ? 'bg-blue-700 text-white' : 'bg-white hover:bg-gray-200'
          }`}
          onClick={() => navigate('/home/help')}
        >
          <span>Help</span>
        </li>
        <li
          className="px-4 py-2 shadow-sm rounded-xl cursor-pointer text-red-600 bg-white hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
          onClick={() => navigate('/')}
        >
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
