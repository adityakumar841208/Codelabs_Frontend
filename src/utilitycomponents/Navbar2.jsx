import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Navigation from '../components/Navigation';
import SearchIcon from '@mui/icons-material/Search';
import { Popover, IconButton, Badge, Button } from '@mui/material';

const Navbar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);  // For Popover
    const [unreadNotifications, setUnreadNotifications] = useState(3); // State for unread notifications
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setUnreadNotifications(0); // Reset unread notifications count when opened
    };

    // Close popover
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <div className="h-16 w-full bg-white flex justify-between items-center sticky top-0 z-10 px-4 md:px-8">
                {/* Hamburger Menu for smaller screens */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-black">
                        <MenuIcon fontSize="large" />
                    </button>
                </div>

                {/* Profile, Notifications, and Search Bar (Visible on md and larger screens) */}
                <div className="hidden md:flex md:justify-between w-full items-center gap-4">
                    <li
                        className={`flex rounded-xl items-center space-x-3 px-3 py-1 cursor-pointer bg-slate-100`}
                        onClick={() => navigate('/home/profile')}
                        style={{
                            boxShadow: 'inset 0 -4px 6px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <AccountCircleIcon className="text-3xl border border-primary rounded-full" fontSize="large" />
                        <span>Aditya</span>
                    </li>

                    {/* Search Bar (Hidden on smaller screens) */}
                    <div className="hidden lg:flex items-center justify-center border rounded-lg border-customBorder overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="h-10 w-32 sm:w-64 px-4 py-2 rounded-l-md focus:outline-none text-black"
                        />
                        <div className="bg-blue-700 p-2 rounded-r-md cursor-pointer hover:bg-blue-800 h-10 text-black">
                            <SearchIcon />
                        </div>
                    </div>

                    {/* Notifications Icon with Badge */}
                    <div className="flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer">
                        <IconButton onClick={handleClick}>
                            <Badge
                                badgeContent={unreadNotifications}  // Show the number of unread notifications
                                color="error"
                                max={99} // Limit to a maximum of 99 notifications
                            >
                                <NotificationsIcon className="text-white" fontSize="medium" />
                            </Badge>
                        </IconButton>
                    </div>
                </div>
            </div>

            {/* Sliding Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-gray-800 text-white transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-50`}
            >
                {/* Close Icon */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-white">
                        <CloseIcon fontSize="large" />
                    </button>
                </div>

                {/* Embed Navigation Component */}
                <div className="px-4">
                    <Navigation /> {/* Render the Navigation component here */}
                </div>

                {/* Notification Item in the Sliding Menu */}
                <div className="px-4 mt-6">
                    <li
                        className={`flex items-center gap-3 md:gap-4 px-3 md:px-4 py-1.5 md:py-2 rounded-xl cursor-pointer text-sm md:text-base hover:bg-gray-700`}
                        onClick={() => alert('Notifications Clicked!')}
                    >
                        <NotificationsIcon fontSize="medium" />
                        <span>Notifications</span>
                    </li>
                </div>
            </div>

            {/* Popover for Notifications */}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                className='mt-2'
            >
                <div className="p-4 w-60 rounded-3xl">
                    <h2 className="font-bold text-lg">Notifications</h2>
                    <ul>
                        {[...Array(5)].map((_, index) => (
                            <li key={index} className="py-2">
                                <p>Notification {index + 1}</p>
                            </li>
                        ))}
                    </ul>
                    <Button onClick={handleClose} color="primary" fullWidth>
                        Close
                    </Button>
                </div>
            </Popover>
        </>
    );
};

export default Navbar2;
