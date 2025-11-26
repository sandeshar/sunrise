'use client';
import Image from "next/image";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div className="px-5 lg:px-32 py-1 flex justify-between items-center bg-white shadow-md w-screen">
                <Image src="/sunriselogo.png" width={120} height={40} alt="Sunrise Logo" />
                <ul className="hidden md:flex space-x-8 font-bold items-center">
                    <li className="hover:cursor-pointer"><a href="#home" className="hover:text-red-600 transition-colors">Home</a></li>
                    <li className="hover:cursor-pointer"><a href="#about" className="hover:text-red-600 transition-colors">About</a></li>
                    <li className="hover:cursor-pointer"><a href="#services" className="hover:text-red-600 transition-colors">Services</a></li>
                    <li className="hover:cursor-pointer"><a href="#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
                    <li className="text-red-600 border-2 border-red-600 px-4 py-1 rounded hover:cursor-pointer"><a href="#contact">Let's Start</a></li>
                </ul>
                <MdMenu size={32} className={`md:hidden ${isMenuOpen ? 'hidden' : 'block'} hover:cursor-pointer`} onClick={() => setIsMenuOpen(true)} />
                <RxCross2 size={32} className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} hover:cursor-pointer`} onClick={() => setIsMenuOpen(false)} />
            </div>
            <ul className={`flex flex-col font-bold items-center space-y-3 py-5 bg-gray-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li className="hover:cursor-pointer"><a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">Home</a></li>
                <li className="hover:cursor-pointer"><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">About</a></li>
                <li className="hover:cursor-pointer"><a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">Services</a></li>
                <li className="hover:cursor-pointer"><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;