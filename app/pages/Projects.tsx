"use client";
import ProjectCard from "../components/ProjectCard";
import MinorProjects from "../components/MinorProjects";
import ngatiMaruWebsite from "@/public/images/More/ngati_maru_website.png";
import workinprogress from "@/public/images/More/wipwebsite.png";
import hawker from "@/public/images/More/hawker.jpg";
import portfolio from "@/public/images/More/portfolio.png";

function ProjectPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4 ">
      <ProjectCard
        image={ngatiMaruWebsite}
        description="New website created for Ngati Maru Runanga to showcase their activities and allow for the public to access their facilities."
        link="https://ngatimarusetupdeployment.netlify.app/"
        title="Ngati Maru Runanga Website"
      />{" "}
      <ProjectCard
        image={portfolio}
        description="Click here to view the Github repository of this portfolio"
        link="https://ngatimarusetupdeployment.netlify.app/"
        title="Portfolio Code"
      />{" "}
      <ProjectCard
        image={hawker}
        description="During my internship at Isim, I contributed to the development of functional interfaces for their latest flight simulation cockpit. My work focused primarily on the artificial horizon display and selected instrument dials, helping to create accurate and responsive cockpit systems that replicate real-world flight instrumentation. The project was developed using a TypeScript and React-based technology stack, providing experience in building interactive, data-driven user interfaces within a specialised simulation environment.
"
        link="https://github.com/TristanBaileyFisher/iSim_Simulators_Internship_Work"
        title="Isim Internship Hawker Development"
      />
      <ProjectCard
        image={workinprogress}
        description="An independent project created to explore technical skills. Although the project remained unfinished, it highlights my ability to develop functional solutions while gaining valuable experience throughout the process.
"
        link="https://strong-crostata-008e79.netlify.app/"
        title="Drag On Vic Website Concept"
      />
      <div className="w-full h-auto flex gap-5">
        <MinorProjects
          description="(Wintec Project 2023 - C#)"
          link="https://github.com/TristanBaileyFisher/BST_AVL_List_CSharp"
          title="BST AVL List"
        />
        <MinorProjects
          description="(Wintect Projects 2023)"
          link="https://github.com/TristanBaileyFisher/AppDev_2023-projects"
          title="Appl Dev Projects"
        />
        <MinorProjects
          description="(Wintect Project 2022 - C#)"
          link="https://github.com/TristanBaileyFisher/Doubly_Linked_list_CSharp"
          title="Doubly Linked List"
        />
      </div>
    </div>
  );
}
export default ProjectPage;
