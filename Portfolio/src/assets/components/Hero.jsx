import React from 'react';
import image from '../components/image.jpg';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
      <div id="home" className='px-16 flex min-h-screen w-full item-center justify-center
      py-28 md:px-32'>
        <div className='flex flex-col items-center justify gap-10 text-black'>

         <motion.div
         initial = {{ opacity: 0, y: -50 }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.8, edelay: 0.2 }}>
         
        <img src={image} alt="Hero" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"  />
        </motion.div>

        <motion.div
        initial = {{ opacity: 0, y: 50 }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 0.8, edelay: 0.2 }}
        className = 'flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
          <h1 className = 'bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Hi, I am Sayed</h1>
          <h3 className = 'text-2xl font-semibold text-gray-700 md:text-3xl lg:text-4xl'>Web Developer</h3>
          <p className= 'md:text-base text-pretty text-sm text-gray-400'>I am a web developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, React, and Node.js. I am always eager to learn new technologies and improve my skills.</p>
      </motion.div>
        </div> 
      </div>


    )
  }
  
  export default Hero;
