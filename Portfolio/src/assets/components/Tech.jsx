import React from 'react';
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { AiOutlinePython } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";

const Tech = () => {
    return (
      <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center jusitfy-center gap-16 md:gap-32">
        <h1 className="text-4xl font-light text-black md:text-6xl">Technologies</h1>

        <div className="flex flex-wrap items-center justify-center gap-10 p-5">

          <div>
          <SiTypescript className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[1220px] lg:text-[150px]'/>
            </div>

            <div>
          <IoLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[1220px] lg:text-[150px]'/>
            </div>

           <div>
          <DiNodejs className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[1220px] lg:text-[150px]'/>
            </div>  

          <div>
          <FaReact className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[1220px] lg:text-[150px]'/>
            </div>

          <div>
          <DiPostgresql className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[1220px] lg:text-[150px]'/>
            </div>

          <div>
          <AiOutlinePython className='cursor-pointer text-[80px] text-black-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[1220px] lg:text-[150px]'/>
            </div>   

          <div>
          <DiMongodb className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[1220px] lg:text-[150px]'/>
          </div>        
        </div>
      </div>
)
  }
  
  export default Tech;
