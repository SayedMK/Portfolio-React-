import React from 'react';
import image1 from '../components/image1.jpg';
import image2 from '../components/image2.jpg';
import { motion } from 'framer-motion';



const projectsData = [
  {
    image: image1,
    title: 'The Daily Drip',
    description: 'A web application that can track your daily water intake.',
    technologies: ['Tailwind CSS', 'JavaScript'],
  },
  {
    image: image2,
    title: 'The Lazy Gourmet',
    description: 'A personal AI chef that can whip up a recipe to suit your upon given your ingredients and stores the recipe hisotry to the database .',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
  },
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial = {{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition = {{ duration: 0.8 }}
    >
      {children}
      
    </motion.div>
  )
}



const ProjectCard = (project) => {

  return (
    <ScrollReveal>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} alt='' className='w-full cursor-pointer rounded-2xl transitin-all-duration-300 hover:scale-105 md:w-[300px]'/>

      <div className='flex flex-col gap-5'>

        <div className='flex flex-col gap-5'>
        <div className='text-xl font-semilbold'>{project.title}</div>
        <p className='text-gray-400'>{project.description}</p>
      </div>

      <div className='flex flex-wrap gap-5'>
        {
          project.technologies.map((tech, index) => (
            <span key={index} className='rounded-lg bg-white p-3'>
              {tech}
            </span>
          ))
        }
      </div>
      </div>
    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
    return (
      <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
        <h1 className='text-4xl font-light text-black md:text-6xl'>My Projects</h1>

        <div className='flex w-full max-w-[1000px] flex-col gap-16 text-black'>
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        }
        </div>
      </div>
    )
  }
  
  export default Projects;