import React from 'react';

const SkillsBox = (props) => {
    return (
        <div className='flex flex-col animate-bounce-y-reduced justify-evenly items-center w-[100px] h-[100px] sm:w-[150px] sm:h-[130px] pt-5  border-2 border-custom-btnBg hover:shadow-sm rounded-md hover:shadow-custom-linkActive text-xl sm:text-3xl hover:text-custom-linkActive m-[10px] sm:mx-[50px]'>
            <img src={props.icon} className='h-1/2' alt="" />
            <div className='pt-5'>{props.name}</div>
        </div>
    );
}

export default SkillsBox;
