"use client";
import ProjectCard from "../components/ProjectCard";
import ngatiMaruWebsite from "@/public/images/More/ngati_maru_website.png";

function ProjectPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4 ">
      <ProjectCard
        image={ngatiMaruWebsite}
        description="I designed and developed a new website for Ngāti Maru to serve as the iwi's primary online presence. The project focused on creating an accessible, modern, and easy-to-manage platform that enables Ngāti Maru to share information, communicate with whānau, promote initiatives and events, and represent the identity and aspirations of the iwi online."
        link="https://ngatimarusetupdeployment.netlify.app/"
        title="Ngati Maru Runanga Website"
      />
      <ProjectCard
        image={ngatiMaruWebsite}
        description=""
        link="https://ngatimarusetupdeployment.netlify.app/"
        title=""
      />
    </div>
  );
}
export default ProjectPage;
