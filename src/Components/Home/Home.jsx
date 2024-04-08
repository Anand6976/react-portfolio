import React, { Suspense, useEffect, useRef, useState } from 'react';
import emojiAnand from "../../assets/emojiAnand.png";
import { Link } from 'react-router-dom';
const Home = (props) => {
    const jobAbout = useRef(0);
    let jobAnimationFlag = false;

    async function simulateTyping(text, delay = 100) {
        jobAbout.current.textContent = ''; // Clear existing text
        for (let i = 0; i < text.length; i++) {
            jobAbout.current.textContent = text.substring(0, i + 1);
            await sleep(delay);
        }
        for (let i = 0; i < text.length; i++) {
            jobAbout.current.textContent = jobAbout.current.textContent.substring(0, jobAbout.current.textContent.length - 1);
            await sleep(delay);
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    useEffect(() => {
        async function startTypingEffect() {
            if (jobAnimationFlag) return;
            jobAnimationFlag = true;
            const jobs = ["Web Development", "Front End Development", "Backend Development"];
            for (const job of jobs) {
                await simulateTyping(job, 100);
            }
            jobAbout.current.textContent = "Web Development!"
        }
        startTypingEffect();
    }, []);
    return (
        <div className="w-full h-screen relative flex flex-col-reverse sm:flex-row text-custom-textColor justify-start items-center">
            <div className="sm:w-1/2 w-full sm:h-screen h-1/2 flex justify-center items-center font-serif flex-col">
                <div className='flex flex-col items-start justify-center'>
                    <div className='sm:text-5xl font-semibold'> Hi There,</div>
                    <div className='sm:text-5xl font-semibold my-1 flex flex-row'>I'm <span className='text-custom-linkActive px-2'>Anand Sonkar</span></div>
                    <div className='sm:text-2xl font-semibold  flex flex-row'>I do <span className='text-custom-linkHover px-2' ref={jobAbout}>Anand Sonkar</span></div>

                    <Link to="https://drive.google.com/file/d/1jpL_epciA6tVH4NwPPGHhgRfKtP5yS87/view?usp=sharing"
                        target='_blank'
                        className='bg-custom-btnBg sm:p-2 sm:my-2 px-2 sm:text-xl py-1 my-1 rounded-md text-white flex flex-row hover:text-black hover:border-custom-linkActive border-2 hover:bg-white'>
                        Resume </Link>
                    <div className='flex flex-row justify-center items-start mt-6  h-10 '>
                        <Link to="https://www.instagram.com/its_anand.76?igsh=eGo4ejh0YnF3eTYx" target='_blank' className='fa-brands fa-instagram sm:fa-2xl fa-xl fa-beat-fade text-custom-btnBg'></Link>
                        <Link to="https://www.linkedin.com/in/anand-sonkar-23487a208/" target='_blank' className='fa-brands fa-linkedin sm:fa-2xl fa-xl fa-beat-fade text-custom-btnBg pl-8 px-4 '></Link>
                        <Link to="https://twitter.com/Anand6976" target='_blank' className='fa-brands fa-x-twitter sm:fa-2xl fa-xl fa-beat-fade text-custom-btnBg  px-4 '></Link>
                        <Link to="https://github.com/Anand6976" target='_blank' className='fa-brands fa-github sm:fa-2xl fa-xl fa-beat-fade text-custom-btnBg  px-4 '></Link>
                    </div>
                </div>
            </div>
            <div className='sm:w-1/2 w-full sm:h-screen h-1/3 flex justify-center items-center '>
                <img src={emojiAnand} alt="" className='w-2/5  sm:mt-[-100px] border-solid border-2  shadow-2xl shadow-custom-linkHover animate-bounce-y-reduced rounded-[50%] ' />
            </div>

        </div>
    );
}

export default Home;
