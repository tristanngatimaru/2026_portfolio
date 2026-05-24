import React from 'react'
import {motion} from "motion/react"
import NavBarDistance from './NavBarDistance'



function NavBar({activeSection}: {activeSection: string}) {
 
    
  return (
    <div className="fixed top-1/2  left-20 self-start ">
      <div>
       <NavBarDistance/> 
      </div>
      
        
        <ul className="flex flex-col gap-4">
            <li ><motion.a transition={{ type: 'spring', damping: 20, stiffness: 300 }} animate={{ fontSize: activeSection === 'home' ? 90 : 24}} className=' text-black text-2xl hover:text-gray-700  font-safira' href="#home">Home</motion.a></li>
            <li ><motion.a transition={{ type: 'spring', damping: 20, stiffness: 300 }} animate={{ fontSize: activeSection === 'about' ? 90 : 24}} className=' text-black text-2xl hover:text-gray-700 font-safira' href="#about">About</motion.a></li>
            <li ><motion.a transition={{ type: 'spring', damping: 20, stiffness: 300 }} animate={{ fontSize: activeSection === 'techStack' ? 90 : 24}} className=' text-black text-2xl hover:text-gray-700 font-safira' href="#tech-stack">Tech Stack</motion.a></li>
            <li ><motion.a transition={{ type: 'spring', damping: 20, stiffness: 300 }} animate={{ fontSize: activeSection === 'projects' ? 90 : 24}} className=' text-black text-2xl hover:text-gray-700 font-safira' href="#projects">Projects</motion.a></li>
            <li ><motion.a transition={{ type: 'spring', damping: 20, stiffness: 300 }} animate={{ fontSize: activeSection === 'graphicDesign' ? 90 : 24}} className=' text-black text-2xl hover:text-gray-700 font-safira' href="#graphic-design">Graphic Design</motion.a></li>
            <li ><motion.a transition={{ type: 'spring', damping: 20, stiffness: 300 }} animate={{ fontSize: activeSection === 'contact' ? 90 : 24}} className=' text-black text-2xl hover:text-gray-700 font-safira' href="#contact">Contact</motion.a></li>
        </ul>
        
    </div>
  )
}

export default NavBar
