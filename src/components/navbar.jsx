import React from 'react'
import { FaSun } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoon } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = ({toggleTheme,darkMode, isopen, togglemenu}) => {
  return (
    <div className="w-full h-fit px-[60px] py-[20px] border-black border-b-2 dark:border-none bg-slate-100 dark:bg-slate-900 z-10 fixed "> 
        <div className="flex justify-between">
            
            <div className="flex justify-center items-center text-2xl font-bold text-blue-600 cursor-pointer">
                <h1>MADHAB</h1>
            </div>

            <div className="hidden md:flex ">
                <ul className="flex justify-around gap-4">
                    <li className=" cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-150"><a href="#">Home</a></li>
                    <li className=" cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-150"><a href="#">About</a></li>
                    <li className=" cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-150"><a href="#">Work</a></li>
                    <li className=" cursor-pointer hover:text-blue-600 hover:scale-110 transition duration-150"><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="flex gap-3 items-center">
            <button onClick={toggleTheme}>
                {darkMode?<FaSun className=" text-[25px] cursor-pointer" />
                :<IoMoon className=" text-[25px] cursor-pointer" />}
            </button>
            <button onClick={togglemenu} className="md:hidden">
            <GiHamburgerMenu className={`${isopen ? "hidden" : "block"} text-[25px] cursor-pointer` }/>
            <IoMdClose className={`${isopen ? "block" : "hidden"} text-[25px] cursor-pointer` }/>
            </button>

            </div>
            
            <div className={`${isopen ? "block" : "hidden"} menu md:hidden flex flex-col items-center`}>
                    <a href="#" className='hover:text-blue-600'>Home</a>
                    <a href="#" className='hover:text-blue-600'>About</a>
                    <a href="#" className='hover:text-blue-600'>Work</a>
                    <a href="#" className='hover:text-blue-600'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar