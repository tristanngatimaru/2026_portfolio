import { FaReact, FaPython } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaCss } from "react-icons/fa6";
import { BsJavascript, BsTypescript, BsWordpress } from "react-icons/bs";
import { BiSolidFileHtml } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio, DiPhotoshop } from "react-icons/di";
import { IoLogoFigma } from "react-icons/io5";
import {
  SiVite,
  SiKotlin,
  SiBlender,
  SiGodotengine,
  SiStrapi,
} from "react-icons/si";
import ableton from "@/public/abletonlive-svgrepo-com.svg";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

type IconItemProps = { item: IconType; name: string; skillLevel: number };

function IconItem({ item: Icon, name, skillLevel }: IconItemProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  return (
    <div ref={ref} className="flex items-center gap-3">
      <Icon
        size={40}
        className="shrink-0 duration-100 ease-in-out hover:scale-125 text-white"
      />
      <div className="flex flex-col w-full">
        <span className="text-sm mb-1 text-white">{name}</span>
        <div className="w-full h-2 bg-mauve-600 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${skillLevel}%` : 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 500 }}
          />
        </div>
      </div>
    </div>
  );
}

type SvgItemProps = { item: StaticImageData; name: string; skillLevel: number };

function SvgIconItem({ item, name, skillLevel }: SvgItemProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  return (
    <div ref={ref} className="flex items-center gap-3">
      <Image
      
        src={item}
        alt={name}
        width={40}
        height={40}
        className="shrink-0 duration-100 ease-in-out hover:scale-125 invert"
      />
      <div className="flex flex-col w-full">
        <span className="text-sm mb-1 text-white">{name}</span>
        <div className="w-full h-2 bg-mauve-600 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${skillLevel}%` : 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 500 }}
          />
        </div>
      </div>
    </div>
  );
}

function TechStack() {
  const iconItems: IconItemProps[] = [
    { item: FaReact, name: "React", skillLevel: 30 },
    { item: FaPython, name: "Python", skillLevel: 40 },
    { item: RiTailwindCssFill, name: "Tailwind", skillLevel: 70 },
    { item: RiNextjsFill, name: "NextJS", skillLevel: 50 },
    { item: FaCss, name: "CSS", skillLevel: 50 },
    { item: BsJavascript, name: "Javascript", skillLevel: 50 },
    { item: BsTypescript, name: "Typescript", skillLevel: 40 },
    { item: BsWordpress, name: "WordPress", skillLevel: 50 },
    { item: BiSolidFileHtml, name: "HTML", skillLevel: 80 },
    { item: TbBrandCSharp, name: "C#", skillLevel: 50 },
    { item: DiVisualstudio, name: "Visual Studio", skillLevel: 50 },
    { item: DiPhotoshop, name: "Photoshop", skillLevel: 90 },
    { item: IoLogoFigma, name: "Figma", skillLevel: 80 },
    { item: SiVite, name: "Vite", skillLevel: 40 },
    { item: SiKotlin, name: "Kotlin", skillLevel: 20 },
    { item: SiBlender, name: "Blender", skillLevel: 70 },
    { item: SiGodotengine, name: "Godot Engine", skillLevel: 50 },
    { item: SiStrapi, name: "Strapi", skillLevel: 50 },
  ];
  const svgItems = [{ item: ableton, name: "Ableton", skillLevel: 90 }];

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full px-10 lg:px-0 lg:w-1/2">
        {iconItems.map((props) => (
          <IconItem key={props.name} {...props} />
        ))}
        {svgItems.map((props) => (
          <SvgIconItem key={props.name} {...props} />
        ))}
      </div>
    </div>
  );
}
export default TechStack;
