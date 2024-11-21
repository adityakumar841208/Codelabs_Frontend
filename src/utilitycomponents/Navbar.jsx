import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='h-16 w-full flex justify-around items-center border-customBorder border-b-2 fixed top-0 z-10 px-4 backdrop-blur-sm bg-gray-900'>
                {/* Logo */}
                <div className="logo text-xl text-white">
                    <Link to='/'>
                        CodeLabs
                    </Link>
                </div>

                {/* Search Bar */}
                <div className='flex items-center justify-center rounded-md border-customBorder border overflow-hidden'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className='h-10 w-32 sm:w-64 px-4 py-2 rounded-l-md focus:outline-none bg-gray-900 text-white'
                    />
                    <div className="bg-primary p-2 rounded-r-md cursor-pointer hover:bg-primaryHover h-10 text-white">
                        <SearchIcon />
                    </div>
                </div>

                {/* Links and Notifications on larger screens */}
                <div className="hidden sm:flex items-center text-lg gap-6 text-white">
                    <Link to='/signup'>Signup</Link>
                    <Link to='/signup'>Quiz</Link>
                    <Link to='/login'>Courses</Link>
                    <Button variant="contained" className='hover:bg-primaryHover text-white' sx={{ color: 'white' }}>
                        AI Chat
                    </Button>
                    <div className="flex items-center justify-center p-2 bg-primary rounded-full hover:bg-primaryHover transition duration-300 ease-in-out ml-12">
                        <NotificationsIcon className="text-white" fontSize="medium" />
                    </div>
                </div>

                {/* Hamburger Menu for smaller screens */}
                <div className="sm:hidden flex items-center">
                    <IconButton onClick={handleMenuOpen} color="inherit">
                        <MenuIcon className="text-white" />
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
                            Courses
                        </MenuItem>
                        <MenuItem
                            onClick={handleMenuClose}
                            className="w-full text-center hover:bg-primaryHover"
                        >
                            <Button variant="contained" className='hover:bg-primaryHover text-white' sx={{ color: 'white' }}>
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

export default Navbar;
