import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    return (
        <>
            <div className='h-16 w-full flex justify-around items-center border-customBorder border-b-2 fixed top-0 backdrop-blur-lg z-10'>
                <div className="logo text-xl">
                    <Link to='/'>
                        CodeLabs
                    </Link>
                </div>

                <div className='flex items-center justify-center rounded-md border-customBorder border overflow-hidden'>
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className='h-10 w-64 px-4 py-2 rounded-l-md focus:outline-none bg-gray-900'
                    />

                    {/* Search Icon */}
                    <div className="bg-primary p-2 rounded-r-md cursor-pointer hover:bg-primaryHover h-10">
                        <SearchIcon />
                    </div>
                </div>

                <div>
                    <div className="text-lg flex gap-6 mt-2">
                        <Link to='/signup'>Signup</Link>
                        {/* <Link to='/login'>Login</Link> */}
                        <Link to='/signup'>Quiz</Link>
                        <Link to='/login'>Courses</Link>
                        <Button variant="contained" className='hover:bg-primaryHover text-white' sx={{
                            color: 'white'
                        }}>AI Chat</Button>
                        <div className="flex items-center justify-center ml-12 p-2 bg-primary rounded-full hover:bg-primaryHover transition duration-300 ease-in-out">
                            <NotificationsIcon className="text-white" fontSize="medium" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16'></div>
        </>
    );
};

export default Navbar;
