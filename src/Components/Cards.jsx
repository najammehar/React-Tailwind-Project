import React from "react";
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
    return(
        <section className="dark:text-white text-black dark:bg-[#242526] bg-[#dbdad9]">
            <div className="max-w-[1240px] mx-auto px-4 pb-16 pt-24 grid md:grid-cols-3 gap-8">
                <div className="w-full sm:w-11/12 mx-auto md:w-full md:mx-0 p-4 shadow-2xl shadow-[#00df9809] flex flex-col my-4 rounded-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00df9809] transition duration-300 dark:bg-[#18191A] bg-[#e7e6e5] ">
                    <img className="w-28 mx-auto -mt-16 bg-gray-100 p-5 rounded-full overflow-visible" src= {Single} alt="Single Image" />
                    <h2 className=" text-3xl font-semibold text-center py-8">Standard</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center font-medium py-8">
                        <p className="py-2 border-y border-gray-300 dark:border-gray-500 mx-4">500GB Storage</p>
                        <p className="py-2 border-b border-gray-300 dark:border-gray-500 mx-4">10 Users Allowed</p>
                        <p className="py-2 border-b border-gray-300 dark:border-gray-500 mx-4">Send up to 20GB</p>
                    </div>
                    <button className="bg-[#00df9a] max-w-[200px] w-full rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00af78] transition-colors duration-300 active:bg-[#00df9a] text-white">Start Trail</button>
                </div>
                <div className="w-full sm:w-11/12 mx-auto md:w-full md:mx-0 p-4 shadow-2xl shadow-[#00df9809] flex flex-col my-4 rounded-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00df9809] transition duration-300 dark:bg-[#18191A] bg-[#e7e6e5] md:my-0 ">
                    <img className="w-28 mx-auto -mt-16 bg-gray-100 p-5 rounded-full overflow-visible" src= {Double} alt="Single Image" />
                    <h2 className=" text-3xl font-semibold text-center py-10">Premium</h2>
                    <p className="text-center text-4xl font-bold">$349</p>
                    <div className="text-center font-medium py-10">
                        <p className="py-2 border-y border-gray-300 dark:border-gray-500 mx-4">2TB Storage</p>
                        <p className="py-2 border-b border-gray-300 dark:border-gray-500 mx-4">50 Users Allowed</p>
                        <p className="py-2 border-b border-gray-300 dark:border-gray-500 mx-4">Send up to 50GB</p>
                    </div>
                    <button className="bg-[#00df9a] max-w-[200px] w-full rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00af78] transition-colors duration-300 active:bg-[#00df9a] text-white">Start Trail</button>
                </div>
                <div className="w-full sm:w-11/12 mx-auto md:w-full md:mx-0 p-4 shadow-2xl shadow-[#00df9809] flex flex-col my-4 rounded-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00df9809] transition duration-300 dark:bg-[#18191A] bg-[#e7e6e5] ">
                    <img className="w-28 mx-auto -mt-16 bg-gray-100 p-5 rounded-full overflow-visible" src= {Triple} alt="Single Image" />
                    <h2 className=" text-3xl font-semibold text-center py-8">Enterprise</h2>
                    <p className="text-center text-4xl font-bold">$549</p>
                    <div className="text-center font-medium py-8">
                        <p className="py-2 border-y border-gray-300 dark:border-gray-500 mx-4">5TB Storage</p>
                        <p className="py-2 border-b border-gray-300 dark:border-gray-500 mx-4">100 Users Allowed</p>
                        <p className="py-2 border-b border-gray-300 dark:border-gray-500 mx-4">Send up to 80GB</p>
                    </div>
                    <button className="bg-[#00df9a] max-w-[200px] w-full rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00af78] transition-colors duration-300 active:bg-[#00df9a] text-white">Start Trail</button>
                </div>
            </div>
        </section>
    )
}

export default Cards