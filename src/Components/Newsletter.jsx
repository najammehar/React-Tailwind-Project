import React from 'react'

const Newsletter = () => {
    return (
        <section className='dark:text-white text-black'>
            <div className='max-w-[1240px] mx-auto px-4 py-16 flex flex-col md:flex-row '>
                <div className='md:w-2/3 flex flex-col justify-center '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Want tips & tricks to optimize your flow?
                </h1>
                <p className='mb-4 md:mb-0'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='md:w-1/3  flex flex-col justify-center'>
                    <div className='flex flex-col justify-center items-center md:justify-start md:flex-row w-full'>
                        <input className='p-3 flex md:max-w-2/3 w-full rounded-md text-black border border-black' type="email" placeholder="Enter your email" />
                        <button className='bg-[#00df9a] text-white rounded-md font-medium max-w-[200px] hover:bg-[#00af78] transition-colors duration-300 active:bg-[#00df9a] px-7 py-3 md:ml-4 my-4 '>Notify</button>
                    </div>
                    <p>
                        We care bout the protection of your data. Read our{' '} 
                        <span className='text-[#00df9a] underline cursor-pointer'>Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Newsletter