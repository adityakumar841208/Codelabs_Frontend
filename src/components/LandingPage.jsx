import React from 'react';
import { ReactTyped } from 'react-typed'

const LandingPage = () => {
    return (
        <div className='hero flex justify-center items-center w-full h-screen text-text pb-28'>
            <div className="intro w-1/2 text-4xl">
                <h1 className='ml-24'>Welcome to <span className='font-bold font-serif'>CodeLabs.</span><br /> Your Gateway to Professional Software Development.

                    <br /> we provide <span></span>
                    <ReactTyped className='text-primary' strings={["Quizes.", "Courses About Programming.", "Ai Chat.", "Developers Community."]} typeSpeed={100} loop />
                </h1>

            </div>
            <div className="img w-1/2 flex justify-center">
                <img src="./comp.webp" alt="Description" className="w-4/5 h-auto hidden sm:block lg:block md:block pr-28" />
            </div>
        </div>
    );
};

export default LandingPage;
