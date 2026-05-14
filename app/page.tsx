import Image from "next/image";
import NavBar from "./components/navBar";
import {useInView} from 'react-intersection-observer';



export default function Home() {

  return (
    <div className="w-full dark:bg-black flex flex-col items-center justify-center">
      {/*navbar*/}
        
          <NavBar />
        
      {/*header*/}
      <div id="home" className="h-screen w-full">
       <h1 className="">HEADER</h1> 
      </div>
      {/*Hero (include links to CV, GitHub, LinkedIn)*/}
      <div className="h-screen w-full">
        <h1>HERO</h1>
      </div>
      {/*About*/}
       
      <div id="about" className="h-screen w-full"> 
        <h1>ABOUT</h1>
      </div>
      {/*Tech Stack*/}
        
      <div id="tech-stack" className="h-screen w-full">
        <h1>TECH STACK</h1>
      </div>
      {/*Timeline of work/life */}        
      <div id="timeline" className="h-screen w-full">
        <h1>TIMELINE</h1>
      </div>
      {/*Projects split top 2-4 projects with impact/results, and other work as optional grid*/}
      <div id="projects" className="h-screen w-full">
        <h1>PROJECTS</h1>
      </div>
      {/*Graphic Design*/}
      <div id="graphic-design" className="h-screen w-full">
        <h1>GRAPHIC DESIGN</h1>
      </div>
      {/*Contact*/}
      <div id="contact" className="h-screen w-full">
        <h1>CONTACT</h1>
      </div>
    </div>
  );
}
