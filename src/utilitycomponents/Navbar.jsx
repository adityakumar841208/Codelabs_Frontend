import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // For navbar visibility
    const menuRef = useRef(null);
    const prevScrollY = useRef(0);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Close the menu if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    // Handle scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY.current && currentScrollY > 50) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`h-20 w-full flex justify-between items-center px-4 md:px-10 lg:px-16 bg-white fixed top-0 z-10 transition-transform duration-300 ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                {/* Logo */}
                <div className="text-2xl font-bold text-black">
                    <Link to="/" className="text-shadow-deep">
                        CodeLabs
                    </Link>
                </div>

                {/* Links for larger screens */}
                <div className="hidden sm:flex items-center text-lg gap-6 text-black">
                    <Link
                        className="hover:bg-slate-200 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500"
                        to="/about"
                    >
                        About Us
                    </Link>
                    <Link
                        className="hover:bg-slate-200 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500"
                        to="/contact"
                    >
                        Contact
                    </Link>
                    <Link
                        className="bg-red-300 text-black hover:bg-red-400 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500"
                        to="/signup"
                    >
                        Signup
                    </Link>
                    <Link
                        className="bg-red-300 text-black hover:bg-red-400 py-1 px-4 rounded-xl text-shadow-deep transition-all duration-500"
                        to="/login"
                    >
                        Login
                    </Link>
                </div>

                {/* Hamburger Menu for smaller screens */}
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-black">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            <div className="mt-20"></div>
            {/* Full-Screen Mobile Menu */}
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="fixed top-0 left-0 w-full h-auto p-5 bg-gray-800 text-white z-20 flex flex-col items-center justify-center"
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-7 right-4 text-white"
                    >
                        <CloseIcon fontSize="small" />
                    </button>
                    <div className="flex flex-col items-center text-lg">
                        <Link
                            to="/signup"
                            className="py-2 px-6 text-center hover:bg-primaryHover"
                            onClick={toggleMenu}
                        >
                            Signup
                        </Link>
                        <Link
                            to="/quiz"
                            className="py-2 px-6 text-center hover:bg-primaryHover"
                            onClick={toggleMenu}
                        >
                            Quiz
                        </Link>
                        <Link
                            to="/about"
                            className="py-2 px-6 text-center hover:bg-primaryHover"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/ai-chat"
                            className="py-2 px-6 text-center hover:bg-primaryHover"
                            onClick={toggleMenu}
                        >
                            AI Chat
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
