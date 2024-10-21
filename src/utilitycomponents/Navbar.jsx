import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-16 w-full flex justify-around items-center'>
            <div className="logo text-xl">
                <Link to='/'>
                    CodeLabs
                </Link>
            </div>
            <div>

            </div>
            <div>
                <div className="text-lg flex gap-6 ">
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
