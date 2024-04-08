import React from 'react';
import useTheme from '../../Contexts/Theme';
import { NavLink, Link } from "react-router-dom";


const Footer = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    return (
        <div className={`w-full ${darkMode ? "border-white" : "border-grey-600"} box-border text-custom-textColor  px-2 border-t-2 sm:py-6 sm:h-0 bg-custom-footerBg  static sm:min-h-fit bottom-1 flex flex-row flex-wrap  justify-start sm:justify-evenly`}>
            <div className="sm:w-2/5 w-full  h-1/3 sm:h-full  py-2 sm:px-10 flex flex-col items-center justify-start">
                <Link to='/' className='w-full   text-3xl text-center px-10'>
                    Anand's Portfolio</Link>
                <p className=' text-sm sm:text-md  text-center sm:text-left px-2 sm:px-10 mt-2'>
                    Hi there! I'm Anand, and this is my creative space. Explore my work, projects, and passions. If you have any questions or opportunities to discuss, feel free to reach out. Thanks for visiting!
                </p>
                <button className='bg-custom-btnBg sm:p-2 sm:my-2 px-2 py-1 my-1 rounded-md text-white flex flex-row'>
                    <div className='px-1 sm:text-md text-sm'>Be happy & keep smiling 😊</div>
                    {/* <div className="material-symbols-outlined sm:text-md text-sm">
                        coffee
                    </div> */}
                </button>
            </div>
            <div className='sm:w-1/5 w-1/2 h-1/3 sm:h-full items-center  justify-start flex flex-col'>
                <h2 className=' text-xl sm:text-3xl w-2/3 text-left'>Quick Links</h2>
                <ul className='w-2/3 px-3 sm:text-xl text-sm'>
                    <li><NavLink to="/" className={({ isActive }) => ` transition-all ease delay-100  flex flex-row font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : ' '}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>About</div>
                    </NavLink>
                    </li>
                    <li><NavLink to="skills" className={({ isActive }) => ` transition-all ease delay-100 flex flex-row font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : ' '}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>Skills</div>
                    </NavLink>
                    </li>
                    <li><NavLink to="education" className={({ isActive }) => ` transition-all ease delay-100 flex flex-row font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : ' '}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>Education</div>
                    </NavLink>
                    </li>
                    <li><NavLink to="projects" className={({ isActive }) => ` transition-all ease delay-100  flex flex-row font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : ' '}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>Projects</div>
                    </NavLink>
                    </li>
                    <li><NavLink to="contact" className={({ isActive }) => `transition-all ease delay-100  flex flex-row  font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : ' '}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>Contact</div>
                    </NavLink>
                    </li>

                </ul>
            </div>
            <div className='sm:w-1/5 w-1/2 h-1/3 sm:h-full sm:py-2 sm:px-10 text-sm sm:text-md flex flex-col items-start justify-start'>
                <h3 className=' text-xl sm:text-3xl'>Contact Info</h3>
                <div className='p-2   flex flex-row'>
                    <div className='material-symbols-outlined'>phone</div>
                    <div className='px-2'>+918948554266</div>
                </div>
                <div className='p-2   flex flex-row'>
                    <div className='material-symbols-outlined'>email</div>
                    <div className='px-2 text-xs'>anandjnp4266@gmail.com</div>
                </div>
                <div className='p-2   flex flex-row'>
                    <div className='material-symbols-outlined'>location_on</div>
                    <div className='px-2'>Uttar-Pradesh, India</div>
                </div>
                <div className='py-5 mx-1   flex flex-row'>
                    <Link to="https://www.instagram.com/its_anand.76?igsh=eGo4ejh0YnF3eTYx" target='_blank' className='fa-brands fa-instagram fa-lg fa-beat-fade text-custom-btnBg px-2'></Link>
                    <Link to="https://www.linkedin.com/in/anand-sonkar-23487a208/" target='_blank' className='fa-brands fa-linkedin fa-lg fa-beat-fade text-custom-btnBg px-2'></Link>
                    <Link to="https://twitter.com/Anand6976" target='_blank' className='fa-brands fa-x-twitter fa-lg fa-beat-fade text-custom-btnBg px-2'></Link>
                    <Link to="https://github.com/Anand6976" target='_blank' className='fa-brands fa-github fa-lg fa-beat-fade text-custom-btnBg px-2'></Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
