import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaBridgeCircleXmark, FaSquareXTwitter } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);  

    const menuOption = () => {
        setIsOpen(!isOpen);
    }

    

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-blue-700 bg-blue/70 px-16 py-6 text-black backdrop-blur-md md:justify-evenly">
        <a href="#home" 
        className= 'bf-gradient-to-r from-blue-500 to-pink-500 bg-clip-text opacity-80 text-3xl font-semilbold transition-all duration-300  hover:opacity-100'>Sayed M Kabir</a>
        <ul className=" md:flex gap-10">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Home</li>
            </a>
            <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Tech</li>
            </a>
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Projects</li>
            </a>
            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Contact</li>
            </a>

        </ul>
            <ul className="hidden md:flex gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500
                hover:opacity-100">
                        <a
                        href="https://www.linkedin.com/in/sayed-kabir-1a8b6a32a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        >
                <FaLinkedin />
                        </a>
                </li>
                
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-yellow-500
                hover:opacity-100">
                        <a
                        href="https://github.com/SayedMK"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        >
                <FaGithubSquare />
                        </a>
                    
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500
                hover:opacity-100">
                    <a
                        href="https://x.com/21SayedK"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        >
                <FaSquareXTwitter />
                    </a>
                </li>
        </ul>

        {isOpen ? (
            <BiX onClick={menuOption} className="md:hidden cursor-pointer text-3xl" />
       ) : (
            <BiMenu onClick={menuOption} className="md:hidden cursor-pointer text-3xl" />
       )} 
    
       {isOpen && (
           <div className="flex flex-col items-center justify-center gap-5">
               <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                   <li>Home</li>
               </a>
               <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                   <li>Tech</li>
               </a>
               <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                   <li>Projects</li>
               </a>
               <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                   <li>Contact</li>
               </a>
           </div>
       )}

    </nav>    
  )
}

export default Navbar