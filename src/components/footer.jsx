import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="absolute flex flex-col lg:flex-row h-[50vh] lg:h-[30vh] w-[100%] bg-slate-200  text-black dark:bg-slate-950 dark:text-white p-[50px]">
        <div className="left  w-[100%] lg:w-[30%] flex flex-col gap-3 justify-center items-center">
                    <a href="#" className='hover:text-blue-600'>Home</a>
                    <a href="#" className='hover:text-blue-600'>About</a>
                    <a href="#" className='hover:text-blue-600'>Work</a>
                    <a href="#" className='hover:text-blue-600'>Contact</a>
        </div>
        <div className="right w-[100%] lg:w-[60%] flex flex-col lg:flex-row gap-6 text-[30px] mt-10 ">
            <div className="flex gap-5 justify-center w-[100%] ">
            <FaLinkedin className="hover:text-blue-600"/>
            <FaInstagram className="hover:text-blue-600"/>
            <FaFacebook className="hover:text-blue-600"/>
            <FaGithub className="hover:text-blue-600"/>
            </div>
            <div className=" flex justify-center lg:w-[500px] text-[15px] lg:text-[20px] text-black dark:text-slate-400 ">
            © 2024 Copyright Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer