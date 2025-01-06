import React from "react";
import { Marquee } from "uicomponent/Marquee";
import MagicButton from "../uicomponent/Buttons";
import { Globe } from "uicomponent/Globe";
// import HyperText from "uicomponent/HyperText";

const LandingPage = () => {
    return (
        <>
            <div className="relative z-0 flex flex-col items-center w-full text-gray-800">
                {/* <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video> */}
                {/* Navbar Space */}

                {/* Content Section */}
                <div className="relative z-10 text-center px-4 sm:px-16 mt-10 my-24 sm:my-48">
                    <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                        Welcome to{" "}
                        <span className="text-indigo-800">CodeLabs</span>
                    </h1>
                    <p className="mt-4 text-sm sm:text-lg font-bold text-center text-gray-800 px-4 sm:px-16 lg:px-56">
                        At CodeLabs, we believe in empowering aspiring developers and
                        experienced coders alike with the tools and resources they need to
                        succeed in the dynamic world of software development. Our platform
                        combines engaging learning experiences with cutting-edge technologies
                        to provide a unique, comprehensive approach to programming education.
                    </p>

                    {/* Call-to-Action Button */}
                    <div className="mt-6 text-base sm:text-xl w-full px-4 sm:px-6 mx-auto">
                        <MagicButton
                            shimmerColor={"#ffffff"}
                            shimmerSize={"0.05em"}
                            shimmerDuration={"3s"}
                            borderRadius={"100px"}
                            background={"rgba(0, 0, 0, 1)"}
                            className="mx-auto"
                            onClick={() => window.location.href = "/signup"}
                        >
                            Get Started
                        </MagicButton>
                    </div>
                </div>
                <Globe />
            </div>

            <div className="flex flex-col items-center justify-center sm:m-10 w-full">
                <img src="./coder2.jpg" alt="" className="h-48 sm:h-72" />
                <img src="./Dashboard_png.webp" alt="" className="w-4/5 sm:w-2/3 -mt-20 sm:-mt-32" />
            </div>

            <div className="flex flex-col items-center justify-center gap-3 sm:m-10 px-6 sm:px-36 w-full -mt-60 sm:-mt-80">
                <div className="py-1 text-blue-700 px-2 sm:px-3 bg-gray-300 rounded-xl text-xs sm:text-base">
                    codelabs.com
                </div>
                <div className="bg-gray-800 shadow-xl flex flex-col p-3 sm:p-4 h-60 sm:h-80 w-4/5 sm:w-2/3 rounded-xl gap-3 sm:gap-5">
                    {/* Terminal Header with Dots */}
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="dots bg-red-500 p-1 sm:p-2 rounded-full"></div>
                        <div className="dots bg-yellow-500 p-1 sm:p-2 rounded-full"></div>
                        <div className="dots bg-green-500 p-1 sm:p-2 rounded-full"></div>
                    </div>

                    {/* Terminal Content */}
                    <div className="mt-2 sm:mt-4 flex flex-col text-xs sm:text-sm text-green-400 font-mono whitespace-pre-line overflow-y-auto">
                        <span>
                            <span className="text-gray-400">~/projects/terminal&gt;</span> <span className="animate-blink">|</span>
                        </span>
                        <span className="mt-2">
                            &lt;html&gt;{'\n'}  &lt;head&gt;{'\n'}    &lt;title&gt;Terminal Example&lt;/title&gt;{'\n'}  &lt;/head&gt;{'\n'}  &lt;body&gt;{'\n'}
                            {'    '}&lt;h1&gt;Hello, World!&lt;/h1&gt;{'\n'}  &lt;/body&gt;{'\n'}&lt;/html&gt;
                        </span>
                    </div>
                </div>
            </div>



            <div className="my-24 blackblock rounded-2xl bg-customDark text-white m-2 lg:mx-40 flex flex-col lg:flex-row shadow-xl">
                {/* Left Section */}
                <div className="first w-full lg:w-1/2 p-6 lg:p-12 flex flex-col items-start justify-start overflow-hidden">
                    <p className="text-yellow-400 font-bold mb-2">KEEP PUSHING YOUR LIMITS!</p>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                        Features that you <span className="text-yellow-400">✌️ need.</span>
                    </h1>
                    <p className="text-base lg:text-lg mb-6">
                        Codelabs is a platform designed to be every coder's ultimate companion. It's a space where you can streamline your workflow, access everything you need in one place, and focus on what truly matters-building and innovating. Welcome to the future of coding, where possibilities are limitless.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        {/* Marquee component with passed buttons as children */}
                        <Marquee className="my-custom-class" repeat={5}>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md shadow-voilet-800 hover:shadow-lg transition-all">
                                AI Assistance
                            </button>
                            <button className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                                Developers Community
                            </button>
                            <button className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                                Project Sharing
                            </button>
                            <button className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                                Courses
                            </button>
                            <button className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                                Quizzes
                            </button>
                        </Marquee>
                        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md shadow-voilet-800 hover:shadow-lg transition-all">
                            AI Assistance
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                            Developers Community
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                            Project Sharing
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                            Courses
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-md hover:shadow-lg transition-all">
                            Quizzes
                        </button> */}
                    </div>
                </div>

                {/* Right Section */}
                <div className="second w-full lg:w-1/2 items-center justify-center py-6 lg:py-16 hidden lg:flex">
                    <div className="rounded-full w-96 h-96 flex items-start">
                        {/* Video Section */}
                        <video
                            className="rounded-xl w-full h-auto"
                            loop
                            autoPlay
                            muted
                            playsInline
                        >
                            <source src="./sumbul-show-off.webm" type="video/mp4" />
                            Video not supported
                        </video>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LandingPage;
