import React , {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const[Navbar, setNavbar] = useState(false)
    const handleNavbar = () => {
        setNavbar(!Navbar)
    }

    return (
        <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 dark:text-white text-black">
            <h1 className="w-full text-[#00df9a] text-3xl font-bold">REACT.</h1>
            <ul className="hidden md:flex">
                <li className="p-4 cursor-pointer hover:text-[#00df9a]">Home</li>
                <li className="p-4 cursor-pointer hover:text-[#00df9a]">Comapny</li>
                <li className="p-4 cursor-pointer hover:text-[#00df9a]">Resources</li>
                <li className="p-4 cursor-pointer hover:text-[#00df9a]">About</li>
                <li className="p-4 cursor-pointer hover:text-[#00df9a]">Contact</li>
            </ul>
            <div onClick={handleNavbar} className="block md:hidden cursor-pointer hover:text-[#00df9a]">
                {!Navbar ? <AiOutlineMenu size={24}/> : <AiOutlineClose size={24}/>}
            </div>
            
            <ul className={Navbar ? 'uppercase fixed left-0 top-0 w-[60%] h-full border-r dark:border-r-gray-900 border-r-gray-[#eee7d8] dark:bg-[#000300] bg-[#fffcff] ease-in-out duration-500': 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className="w-full text-[#00df9a] text-3xl font-bold h-24 flex justify-left mx-4 items-center">REACT.</h1>
                <li className="p-4 mx-4 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:text-[#00df9a]">Home</li>
                <li className="p-4 mx-4 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:text-[#00df9a]">Comapny</li>
                <li className="p-4 mx-4 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:text-[#00df9a]">Resources</li>
                <li className="p-4 mx-4 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:text-[#00df9a]">About</li>
                <li className="p-4 mx-4 cursor-pointer hover:text-[#00df9a]">Contact</li>
            </ul>
            
        </nav>
        

    )
}

export default Navbar