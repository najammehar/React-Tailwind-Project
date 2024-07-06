import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <section className='dark:text-white text-black'>
            <div className='max-w-[800px] px-4 mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] text-sm sm:text-xl font-bold pb-1 sm:pb-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='font-bold text-4xl sm:text-6xl pb-1 sm:pb-2'>Grow With Data</h1>
                <div className='flex justify-center items-center gap-1 sm:gap-[6px] '>
                    <p className='text-sm sm:text-xl font-bold pb-1 sm:pb-2'>Fast, Flexible financing for</p>
                    <ReactTyped
                    className = 'text-sm sm:text-xl font-bold pb-1 sm:pb-2 text-gray-500'
                    strings = {["BTB", "BTC", "SASS"]}
                    typeSpeed = {140}
                    backSpeed = {140}
                    loop
                    />
                </div>
                <p className='text-sm sm:text-xl font-bold text-gray-500 pb-1 sm:pb-2 mb-2'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-[#00df9a] max-w-[200px] w-full px-6 py-3 rounded-md mx-auto font-bold text-sm hover:bg-[#00af78] transition-colors duration-300 active:bg-[#00df9a] text-white'>Get Started</button>
            </div>
        </section>
    )
}

export default Hero
