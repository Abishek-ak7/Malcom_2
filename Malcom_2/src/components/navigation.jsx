import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../assets/Navigation.css';

function Navigation() {
    const [isVisible, setIsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDonateClick = () => {
        setIsVisible(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling on the body
    };

    const handleClose = () => {
        setIsVisible(false);
        document.body.style.overflow = 'auto'; // Enable scrolling on the body
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling on the body
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling on the body
        }
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode === 27) { // Check if ESC key is pressed
                handleClose();
                if (menuOpen) toggleMenu();
            }
        };

        if (isVisible || menuOpen) {
            window.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isVisible, menuOpen]);

    return (
        <div>
            <nav className="flex justify-between items-center w-[92%]">
                <div className="flex w-26 p-3">
                    <h1 className="ak text-white font-extrabold font-serif ">MALCOM COMPANY</h1>
                </div>

                <div className="hidden md:flex">
                    <ul className="flex gap-6">
                        <li><a href="#" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid">Product</a></li>
                        <li><a href="#" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid">Services</a></li>
                        <li><a href="#" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid">Careers</a></li>
                        <li><a href="#" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid">About</a></li>
                    </ul>
                </div>

                <div>
                    <button onClick={handleDonateClick} className="hover:bg-white text-lg font-bold w-28 font-Mr hover:h-7 hover:rounded-2xl hover:text-purple-800 text-white">Donate Us</button>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <FontAwesomeIcon icon={faBars} style={{ width: '25px', height: '35px' }} />
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-black">
                        <FontAwesomeIcon icon={faTimes} style={{ width: '25px', height: '35px' }} />
                    </button>
                    <ul className="flex flex-col gap-6 text-center">
                        <li><a href="#" className="text-black text-lg hover:underline hover:underline-offset-4 decoration-purple-900">Product</a></li>
                        <li><a href="#" className="text-black text-lg hover:underline hover:underline-offset-4 decoration-purple-900">Services</a></li>
                        <li><a href="#" className="text-black text-lg hover:underline hover:underline-offset-4 decoration-purple-900">Careers</a></li>
                        <li><a href="#" className="text-black text-lg hover:underline hover:underline-offset-4 decoration-purple-900">About</a></li>
                    </ul>
                </div>
            )}

            {isVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50" onClick={handleClose}>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-3xl font-bold italic mb-4">Donate,</h2>
                        <p className="mb-6 text-black font-semibold">Thank you for your support. Your contribution means a lot to us.</p>
                        <form>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Firstname" className="border border-gray-300 p-2 rounded-md" />
                                <input type="text" placeholder="Lastname" className="border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Email" className="border border-gray-300 p-2 rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <input type="text" placeholder="Amount $" className="border border-gray-300 p-2 rounded-md w-full" />
                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" className="border border-gray-300 rounded mr-2" />
                                <span>I accept the <a href="#" className="text-purple-900">Terms of Use</a> & <a href="#" className="text-purple-900">Privacy Policy</a></span>
                            </div>
                            <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-md">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navigation;