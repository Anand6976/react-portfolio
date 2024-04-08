import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import logoblack from '../../assets/logoblack.png'
import logowhite from '../../assets/logowhite.png'
import useTheme from '../../Contexts/Theme';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();
    const menuRef = useRef(0);
    const menuBtnClick = (e) => {
        // e.preventDefault();
        setMenuActive(!menuActive);
    }
    return (

        <div className='px-2 py-2 flex sm:flex-row border-b border-custom-textColor'>
            <div onClick={toggleDarkMode} className="w-1/2 py-2 flex justify-start items-center">
                <img src={darkMode ? logowhite : logoblack} className=' sm:w-[10rem] w-[7rem]' />
            </div>
            <div onClick={menuBtnClick} ref={menuRef} className='z-10 w-1/2 flex justify-end items-center sm:hidden material-symbols-outlined text-5xl text-custom-textColor'>
                {!menuActive ? 'menu' : 'close'}
            </div>
            <nav className={`bg-custom-background z-10 sm:w-1/2 sm:transition-none transition-all sm:flex-row fixed ${menuActive ? 'mx-0' : 'mx-[-110vw]'} my-12 sm:my-0 sm:mx-0 sm:static  flex justify-end items-center flex-col w-full`}>
                <NavLink to="/" className={({ isActive }) => `hover:underline hover:underline-offset-8 transition-all text-2xl  font-light drop-shadow-xl px-4 py-1 hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                    About
                </NavLink>
                <NavLink to="/skills" className={({ isActive }) => `hover:underline hover:underline-offset-8 transition-all text-2xl  font-light drop-shadow-xl px-4 py-1 hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                    Skills
                </NavLink>
                <NavLink to="/education" className={({ isActive }) => `hover:underline hover:underline-offset-8 transition-all text-2xl  font-light drop-shadow-xl px-4 py-1 hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                    Education
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => `hover:underline hover:underline-offset-8 transition-all text-2xl  font-light drop-shadow-xl px-4 py-1 hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `hover:underline hover:underline-offset-8 transition-all text-2xl  font-light drop-shadow-xl px-4 py-1 hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                    Contact
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
