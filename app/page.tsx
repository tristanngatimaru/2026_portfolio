"use client";

import NavBar from "./components/navBar";
import RotatingText from "@/components/RotatingText";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: techStackRef, inView: techStackInView } = useInView({
    threshold: 0.3,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: graphicDesignRef, inView: graphicDesignerInView } = useInView({
    threshold: 0.3,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.3,
  });

  const activeSection = homeInView
    ? "home"
    : aboutInView
      ? "about"
      : techStackInView
        ? "techStack"
        : projectsInView
          ? "projects"
          : graphicDesignerInView
            ? "graphicDesign"
            : contactInView
              ? "contact"
              : "home";
  return (
    <div className="w-full dark:bg-white flex flex-col items-center justify-center">
      {/*navbar*/}

      <NavBar activeSection={activeSection} />

      {/*header*/}

      <div ref={homeRef} id="home" className="h-screen w-full bg-white flex">
        {/*Main Title Sequence*/}
        <div className="w-full flex justify-end pt-32 pr-32">
          <div className="w-fit ">
            <h1 className=" w-auto text-[40px] font-seg font-light pl-2 leading-8">
              TRISTAN FISHER
            </h1>
            <h1 className="lg:text-[128px] font-seg font-bold leading-28">
              PORTFOLIO
            </h1>
            <div className="flex">
              <RotatingText
                className="w-full text-left pl-2 font-seg font-light text-[40px] text-nowrap"
                texts={[
                  "WEB DEVELOPMENT",
                  "GRAPHIC DESIGN",
                  "MUSIC PRODUCTION",
                  "SOFTWARE DEVELOPMENT",
                ]}
                mainClassName="  text-black overflow-hidden justify-center"
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
                splitBy="characters"
                auto
                loop
              />
              <h1 className=" text-right pr-2 font-seg font-light text-[40px]">
                2026
              </h1>
            </div>
            <div className="pt-2 flex gap-4 text-2xl">
              <FaFacebookF className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
              <FaInstagram className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
              <FaLinkedinIn className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
              <FaGithub className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {/*Hero (include links to CV, GitHub, LinkedIn)*/}

      {/*About*/}

      <div ref={aboutRef} id="about" className="h-screen w-full white">
     
        <div className=" flex items-end justify-end right-0 w-full">
          
          <div className="flex-col w-1/2 text-right pr-32 font-seg font-light text-2xl">
          <h1 className="font-safira text-5xl pb-10 pt-32">Kia Ora, I'm Tristan</h1>
            <div className="pb-10">
              I am a web developer, graphic designer, programmer, DJ, and music
              producer currently working within my iwi as Web Developer and GIS
              Lead.
            </div>
            <div className="pb-10">
              My work sits at the intersection of creativity and technology.
              With qualifications in Information Technology, Music, and
              Teaching, I enjoy combining technical problem-solving with
              creative thinking to build engaging digital expereinces.
            </div>
            <div className="pb-10">
              Throughout my journey I've worked across web development, software
              engineering, design, GIS systems, and interactive media. My
              experience includes developing software solutions using
              technologies such as React, TypeScript, JavaScript, C#, SQL, and
              modern web tools, alongside industry work involving application
              planning, testing, and systems development.
            </div>
            <div className="pb-10">
              Beyond development, music and creative expression remain a huge
              part of who I am — from DJing and music production to visual
              design and experimental projects. This portfolio reflects that
              blend of disciplines and the projects that continue to shape my
              creative and technical journey.
            </div>
          </div>
        </div>
      </div>
      {/*Tech Stack*/}

      <div
        ref={techStackRef}
        id="tech-stack"
        className="h-screen w-full bg-blue-950"
      >
        <h1>TECH STACK</h1>
      </div>
      {/*Projects split top 2-4 projects with impact/results, and other work as optional grid*/}
      <div
        ref={projectsRef}
        id="projects"
        className="h-screen w-full bg-red-950"
      >
        <h1>PROJECTS</h1>
      </div>
      {/*Graphic Design*/}
      <div
        ref={graphicDesignRef}
        id="graphic-design"
        className="h-screen w-full bg-purple-950"
      >
        <h1>GRAPHIC DESIGN</h1>
      </div>
      {/*Contact*/}
      <div
        ref={contactRef}
        id="contact"
        className="h-screen w-full bg-pink-950"
      >
        <h1>CONTACT</h1>
      </div>
    </div>
  );
}
