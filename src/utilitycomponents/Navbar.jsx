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
            <div className='h-20 w-full flex justify-around gap-x-96 items-center fixed top-0 z-10 px-4 bg-white'>
                {/* Logo */}
                <div className="logo text-2xl font-bold text-black">
                    <Link to='/' className='text-shadow-deep'>
                        CodeLabs
                    </Link>
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

                {/* Links and Notifications on larger screens */}
                <div className="hidden sm:flex items-center text-lg gap-4 text-black">
                    <Link className='hover:bg-slate-200 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500' to='/login'>About Us</Link>
                    <Link className='hover:bg-slate-200 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500' to='/login'>Contact</Link>
                    <Link className='hover:bg-slate-200 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500' to='/login'>Support</Link>
                    <Link className='bg-red-300 text-black hover:bg-red-400 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500' to='/signup'>Signup</Link>
                    <Link className='bg-red-300 text-black hover:bg-red-400 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500' to='/login'>Login</Link>
                    {/* <Button variant="contained" className='hover:bg-primaryHover text-black' sx={{ color: 'white' }}>
                        AI Chat
                    </Button>
                    <div className="flex items-center justify-center p-2 bg-primary rounded-full hover:bg-primaryHover transition duration-300 ease-in-out ml-12 cursor-pointer">
                        <NotificationsIcon className="text-black" fontSize="medium" />
                    </div> */}
                </div>

                {/* <div className="flex items-center justify-between gap-6 text-lg">
                    <button className='py-1 px-4 hover:bg-slate-200 rounded-xl text-shadow-deep'>
                        Login
                    </button>
                    <button className='py-1 px-4 hover:bg-slate-200 rounded-xl text-shadow-deep'>
                        Sign Up
                    </button>
                </div> */}

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
            <div className='mt-20'></div>
        </>
    );
};

export default Navbar;
