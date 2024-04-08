import React, { useRef } from 'react';
import useTheme from '../../Contexts/Theme'
import { Link } from 'react-router-dom';
const ProjectCard = (props) => {
    const { darkMode, toggleDarkMode } = useTheme();
    const ele = useRef();
    function hoverHandle(e) {
        ele.current.scrollTop += 50;
    }
    function hoverLeave(e) {
        ele.current.scrollTop -= 50;
    }

    return (
        <Link to={props.link} ref={ele} onMouseEnter={hoverHandle} onMouseLeave={hoverLeave} target='_blank' className='hover:shadow-lg hover:shadow-custom-linkHover   w-[400px] h-[250px] border-2 mx-[25px] my-[30px] animate-bounce-y-reduced border-custom-linkActive rounded-lg overflow-hidden'>
            <img src={props.img} alt="" className='w-full h-full z-0' />
            <div className={`relative bottom-10  z-10 bg-custom-linkActive py-2 ${darkMode ? "text-black" : "text-white"}`}>
                <div className={`w-full text-xl font-bold `}>{props.name}</div>
                <div className='w-full text-md'>{props.des}</div>
            </div>
        </Link >
    );
}

export default ProjectCard;
