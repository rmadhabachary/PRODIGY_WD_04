import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function About() {
  return (
    <div className=" dark:bg-slate-600 min-h-[100vh]">
      <div className=" flex flex-col lg:flex-col m-[30px] p-[50px]">
        <div className="flex flex-col text-[80px] items-center gap-5  lg:flex-row lg:justify-around lg:text-[50px] mb-[80px]">
          <SiMongodb />
          <SiExpress />
          <FaReact />
          <FaNodeJs />
          <TbBrandNextjs />
          <SiRedux />
          <FaHtml5 />
          <FaSass />
          <IoLogoJavascript />
          <SiTailwindcss />
        </div>
        <div className=" flex-wrap overflow-hidden border-2 border-slate-500 w-[100%] lg:w-[80%] h-fit lg:h-[250px] rounded-xl p-[50px] flex justify-center items-center lg:ml-[150px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit earum tempore, molestiae voluptate in numquam laudantium ipsam maxime. Totam dolore consequatur fuga, praesentium, explicabo asperiores rerum quisquam exercitationem libero iste, expedita odio atque mollitia reiciendis necessitatibus dicta ex quo nobis suscipit illum accusantium illo quam? Esse fugiat asperiores deserunt!
          <button className="bg-blue-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-blue-800 ml-[20px] mt-[30px]">Resume</button>
        </div>
        
      </div>
    </div>
  );
}

export default About;
