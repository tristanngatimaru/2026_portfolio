"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { useState } from "react";

interface useProjectCard {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ image, title, description, link }: useProjectCard) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col w-full">
      {/* card */}
      <a
        href={link}
        className="relative w-full h-80 cursor-pointer group rounded-2xl [clip-path:inset(0_round_1rem)] hover:scale-102 ease-in-out duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        {/* blur layer — mask-image gradients the blur from sharp (top) to blurry (bottom) */}
        <span className="w-full h-full bottom-0 absolute z-10 backdrop-blur-sm mask-[linear-gradient(to_top,black_6d0%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
        {/* dark overlay — separate so it doesn't fight the blur */}
        <span className="w-full h-full absolute z-11 bg-black group-hover:opacity-50 opacity-0 duration-300 ease-in-out"></span>
        <div className=" absolute bottom-0 left-0 w-full z-20 p-4 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h1 className="text-white font-bold">{title}</h1>
          <p className="text-white text-sm">{description}</p>
        </div>
        <Image src={image} alt={title} fill className="object-cover z-0 " />
        {/* card image — sits on top */}
      </a>
    </div>
  );
}
export default ProjectCard;
