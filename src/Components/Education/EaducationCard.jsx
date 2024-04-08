import React from 'react';


const EaducationCard = ({ course,
    institute,
    duration,
    icon,
    status,
    university }) => {
    if (!(course || institute || duration || icon || status || university)) return (<></>);

    return (
        <div className='h-[150px] sm:h-[200px] w-full border-2 my-2 animate-bounce-x-reduced  hover:shadow-lg hover:shadow-custom-linkHover  rounded-md flex flex-row justify-center items-center'>
            <img src={icon} className='w-1/5 h-2/3 m-1 p-1' />
            <div className='w-4/5 p-1 text-left flex flex-col justify-start h-2/3 '>
                <div className='text-custom-linkActive sm:text-2xl text-xl font-bold '>{course}  </div>
                <div className='text-custom-textColor text-sm sm:text-lg font-bold'>{institute} | {university}</div>
                <div className='text-custom-textColor text-sm sm:text-lg font-bold'>{duration} | {status}</div>
            </div>
        </div>
    );
}

export default EaducationCard;
