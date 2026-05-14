import React from 'react'




function NavBar() {
    
  return (
    <div className="sticky top-1/2 -translate-y-1/2 left-20 self-start">
        
        <ul className="flex flex-col gap-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#graphic-design">Graphic Design</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
    </div>
  )
}

export default NavBar
