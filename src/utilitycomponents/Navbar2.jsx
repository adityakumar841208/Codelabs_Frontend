import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar2 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='h-16 w-full bg-white flex justify-between gap-x-96 items-center fixed top-0 z-10 px-8 backdrop-blur-sm'>
                {/* Logo */}
                <div className="logo text-2xl font-bold text-black">
                    <Link to='/' className='text-shadow-deep'>
                        CodeLabs
                    </Link>
                </div>

                {/* date  */}
                <div className='w-80 bg-gray-100 py-2 px-4 rounded-md text-shadow-deep shadow-lg'>
                    Monday 25 October
                </div>
                {/* Search Bar
                <div className='flex items-center justify-center rounded-lg border-customBorder overflow-hidden'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className='h-10 w-32 sm:w-64 px-4 py-2 rounded-l-md focus:outline-none  text-black'
                    />
                    <div className="bg-primary p-2 rounded-r-md cursor-pointer hover:bg-primaryHover h-10 text-black">
                    <SearchIcon />
                    </div>
                    </div> */}

                <div className='flex items-center justify-center'>
                    <li
                        className={`flex rounded-xl items-center shadow-inner shadow-gray-500/50 space-x-3 px-3 py-1 cursor-pointer bg-slate-100`}
                        onClick={() => navigate('/home/profile')}
                        style={{
                            boxShadow: 'inset 0 -4px 6px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <AccountCircleIcon className="text-3xl border border-primary rounded-full" fontSize="large" />
                        <span>UserName</span>
                    </li>

                    {/* Links and Notifications on larger screens */}
                    <div className="hidden sm:flex items-center text-lg gap-4 text-black">
                        {/* <Link className='hover:bg-slate-200 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500' to='/login'>About Us</Link> */}
                        <div className="flex items-center justify-center p-2 bg-blue-700 rounded-full hover:bg-primaryHover transition duration-300 ease-in-out ml-12 cursor-pointer">
                            <NotificationsIcon className="text-white" fontSize="medium" />
                        </div>
                    </div>
                </div>


                {/* Hamburger Menu for smaller screens */}
                <div className="sm:hidden flex items-center">
                    <IconButton onClick={handleMenuOpen} color="inherit">
                        <MenuIcon className="text-black" />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                            style: {
                                width: '95%',
                                maxWidth: '95%',
                                backgroundColor: '#1f2937', // Dark mode background color
                                color: 'white', // Text color in dark mode
                            },
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <MenuItem
                            onClick={handleMenuClose}
                            component={Link}
                            to="/signup"
                            className="w-full text-center hover:bg-primaryHover"
                        >
                            Signup
                        </MenuItem>
                        <MenuItem
                            onClick={handleMenuClose}
                            component={Link}
                            to="/signup"
                            className="w-full text-center hover:bg-primaryHover"
                        >
                            Quiz
                        </MenuItem>
                        <MenuItem
                            onClick={handleMenuClose}
                            component={Link}
                            to="/login"
                            className="w-full text-center hover:bg-primaryHover"
                        >
                            About Us
                        </MenuItem>
                        <MenuItem
                            onClick={handleMenuClose}
                            className="w-full text-center hover:bg-primaryHover"
                        >
                            <Button variant="contained" className='hover:bg-primaryHover text-black' sx={{ color: 'white' }}>
                                AI Chat
                            </Button>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            <div className='mt-16'></div>
        </>
    );
};

export default Navbar2;
