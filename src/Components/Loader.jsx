import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-20 h-20 border-4 border-opacity-20 border-transparent border-t-custom-linkActive rounded-full animate-spin' />
        </div>
    );
}

export default Loader;
