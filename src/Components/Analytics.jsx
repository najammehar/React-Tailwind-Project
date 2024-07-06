import React from 'react';
import Laptop from '../assets/laptop.png';

const Analytics = () => {
    return (
        <section className="w-full dark:bg-[#242526] bg-[#dbdad9] dark:text-white text-black py-16 px-4">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='max-w-sm w-full mx-auto my-4 md:max-w-md' src={Laptop} alt="Laptop" />
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className='dark:text-gray-300 text-[#2e2a24]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                      molestiae delectus culpa hic assumenda, voluptate reprehenderit
                      dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                      eveniet ex deserunt fuga?
                    </p>
                    <button className='bg-black active:bg-black hover:bg-[#131313] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Analytics