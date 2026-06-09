/* eslint-disable react/no-unescaped-entities */
"use client";

import ContactMe from "./pages/ContactMe";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import PausePlay from "./components/PausePlay";
import Projects from "./pages/Projects";
import TechStack from "./pages/techStack";
import NavBar from "./components/navBar";
import RotatingText from "./components/rotatingtext";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import MiniNavBar from "./components/MiniNavBar";
import { InfiniteScrollRow } from "./components/background";
import sky from "../public/images/background_parallax/sky/1.png";
import cloud2 from "../public/images/background_parallax/sky/2.png";
import cloud3 from "../public/images/background_parallax/sky/3.png";
import cloud4 from "../public/images/background_parallax/sky/4.png";
import cloud5 from "../public/images/background_parallax/sky/5.png";
import GraphicDesign from "./pages/GraphicDesign";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollYProgress } = useScroll({});

  const up1 = useTransform(scrollYProgress, [0, 1], ["50%", `-10%`]);
  const up2 = useTransform(scrollYProgress, [0, 1], ["20%", `-20%`]);
  const up4 = useTransform(scrollYProgress, [0, 1], ["40%", `-40%`]);

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
    <div className="w-full  flex flex-col items-center justify-center overflow-hidden text-white">
      {/*navbar*/}

      <div className="hidden lg:block ">
        <NavBar activeSection={activeSection} />
      </div>
      <div className="flex lg:hidden w-full">
        <MiniNavBar />
      </div>

      {/*header*/}
      <div className="fixed top-20 left-20 z-9999">
        <PausePlay
          isPlaying={isPlaying}
          onToggle={() => setIsPlaying(!isPlaying)}
        />
      </div>

      <div
        ref={(el) => {
          heroRef.current = el;
          homeRef(el);
        }}
        id="home"
        className="relative h-screen w-full flex"
      >
        <motion.div className="fixed inset-0 -z-10">
          <InfiniteScrollRow image={sky} duration={200} paused={!isPlaying} />
        </motion.div>
        <motion.div style={{ y: up1 }} className="fixed inset-0 -z-10">
          <InfiniteScrollRow
            image={cloud2}
            duration={150}
            paused={!isPlaying}
          />
        </motion.div>
        <motion.div style={{ y: up2 }} className="fixed inset-0 -z-10">
          <InfiniteScrollRow
            image={cloud3}
            duration={140}
            paused={!isPlaying}
          />
        </motion.div>
        <motion.div style={{ y: up4 }} className="fixed inset-0 -z-10">
          <InfiniteScrollRow
            image={cloud4}
            duration={130}
            paused={!isPlaying}
          />
        </motion.div>
        <motion.div className="fixed inset-0 z-50 pointer-events-none drop-shadow-2xl">
          <InfiniteScrollRow
            image={cloud5}
            duration={120}
            paused={!isPlaying}
          />
        </motion.div>

        {/* dark overlay between background and content */}
        <div className="fixed inset-0 bg-black/20 -z-[5] pointer-events-none" />

        {/*Main Title Sequence*/}
        <div className="relative z-50 w-full h-full flex justify-center lg:justify-end pt-40 lg:pt-20 lg:pr-20">
          <div className=" w-fit ">
            <h1 className="select-none w-auto text-[18px] lg:text-[32px] font-seg font-light lg:pl-2 leading-0 lg:leading-8">
              TRISTAN FISHER
            </h1>
            <h1 className="drop-shadow-xl select-none text-[50px] lg:text-[96px] font-seg font-bold leading-15 lg:leading-28">
              PORTFOLIO
            </h1>
            <div className="flex">
              <RotatingText
                className="select-none w-full text-left lg:pl-2 font-seg font-light text-[18px] lg:text-[32px] text-nowrap"
                texts={[
                  "WEB DEVELOPMENT",
                  "GRAPHIC DESIGN",
                  "MUSIC PRODUCTION",
                  "SOFTWARE DEVELOPMENT",
                ]}
                mainClassName="  text-white overflow-hidden justify-center"
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
              <h1 className="select-none text-right lg:pr-2 font-seg font-light text-[18px] lg:text-[32px]">
                {new Date().getFullYear()}
              </h1>
            </div>
            <div className="pt-2 flex gap-4 text-2xl">
              <a
                href="https://www.facebook.com/Pitchylaroux/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/ox_pitchy_xo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
              </a>
              <a
                href="https://github.com/TristanBaileyFisher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:scale-110 duration-100 ease-in-out cursor-pointer" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      {/*Hero (include links to CV, GitHub, LinkedIn)*/}

      {/*About*/}

      <div ref={aboutRef} id="about" className="h-auto w-full ">
        <div className=" flex items-center justify-center lg:items-end lg:justify-end right-0 w-full">
          <div className="flex-col p-5 lg:p-0 lg:w-1/2 text-center lg:text-right lg:pr-20 font-seg font-light text-xl">
            <h1 className="font-safira text-4xl pb-10 pt-20">
              Kia Ora, I'm Tristan
            </h1>
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
              design and experimental projects.
            </div>
          </div>
        </div>
      </div>
      {/*Tech Stack*/}

      <div
        ref={techStackRef}
        id="tech-stack"
        className="h-auto w-full  lg:pr-20 pt-20 pb-20"
      >
        <TechStack />
      </div>
      {/*Projects split top 2-4 projects with impact/results, and other work as optional grid*/}
      <div
        ref={projectsRef}
        id="projects"
        className="h-auto w-full lg:pr-20 pt-20 pb-20 items-end justify-end flex"
      >
        <Projects />
      </div>
      {/*Graphic Design*/}
      <div
        ref={graphicDesignRef}
        id="graphic-design"
        className="h-auto w-full lg:pr-20 pt-20 pb-20 flex justify-end"
      >
        <GraphicDesign />
      </div>
      {/*Contact*/}
      <div
        ref={contactRef}
        id="contact"
        className="h-screen w-full lg:pr-20 pt-20 pb-20 flex justify-end"
      >
        <ContactMe />
      </div>
    </div>
  );
}
