import React from 'react'
import { CiLinkedin } from "react-icons/ci";

function Hero() {
  return (
    <div className=" dark:bg-slate-600">
      <div className="flex flex-col w-[100%] lg:flex-row lg:gap-7 gap-10 p-[100px] h-[100vh]">
        <div className="left w-[100%] lg:w-[50%] flex justify-center  flex-col">
          <h2 className="text-[30px] font-semibold ">Hey Madhab here,</h2>
          <h1 className="text-[40px] font-bold">I'm a <span className="text-blue-600">Designer</span></h1>
          <p className="text-[20px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptas voluptates officia ullam officiis rerum velit consectetur error facere id?</p>
          <div className="flex flex-row gap-3 items-center">
          <button className="bg-blue-500 w-[110px] h-[40px] rounded-md p-1 text-white cursor-pointer hover:bg-blue-800 mt-[30px]">Let's Connect</button>
          <CiLinkedin className="text-[40px] text-blue-600 mt-[30px] hover:text-black dark:text-white dark:hover:text-blue-600 cursor-pointer"/>
          </div>
        </div>
        <div className="right lg:w-[50%] w-[100%] flex justify-center items-center ">
            <img src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49122/article_aligned%402x.jpg" alt="" className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] rounded-full object-cover " />
        </div>
      </div>
    </div>
  )
}

export default Hero