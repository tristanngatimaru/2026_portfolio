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
      <div
        className="relative w-full h-60 cursor-pointer group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="absolute bottom-2 z-20 flex flex-col items-center w-full">
          <div className="opacity-0 group-hover:opacity-100 duration-200 ease-in-out flex flex-col items-center hover:scale-120 transition-transform">
            <span className="text-white">More</span>
            <RiArrowDownWideFill className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* left popup — slides out on hover */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          animate={{ x: hovered ? "-90%" : "0%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="absolute top-1/2 -translate-y-1/2 left-0 h-11/12 w-20   z-0 "
        >
          <div className="text-black text-center flex items-center justify-center h-full w-full bg-white duration-200 hover:bg-gray-400 hover:text-white ease-in-out rounded-l-2xl">
            <h4 className="-rotate-90 whitespace-nowrap">Link Here</h4>
          </div>
        </motion.a>

        {/* card image — sits on top */}
        <motion.div
          animate={{
            borderBottomLeftRadius: expanded ? 0 : 16,
            borderBottomRightRadius: expanded ? 0 : 16,
          }}
          className="absolute inset-0 z-10 rounded-2xl overflow-hidden"
        >
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 z-10"
          />
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      {/* description panel — expands in flow on click */}
      <motion.div
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="overflow-hidden bg-white rounded-b-2xl -mt-2"
      >
        <div className="p-4">
          <h3 className="text-black font-bold text-lg">{title}</h3>
          <p className="text-black text-sm mt-2">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
export default ProjectCard;
