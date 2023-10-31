import React from "react";
import ProjectItem from "./ProjectItem";
import PeronalProject from "./PeronalProject";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="sm:text-center lg:text-left text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="sm:text-center lg:text-left py-4">
          Commercial Level Products
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="JumboTaxes"
            backgroundImg="assets/projects/jumbotaxes.png"
            projectUrl="/jumbo-taxes"
            tech="ReactJS | VITE | NodeJS | PostgreSQL"
          />
          <ProjectItem
            title="EventSimplify"
            backgroundImg="assets/projects/event-simplify.png"
            projectUrl="/event-simplify"
            tech="NextJS | NodeJS | PostgreSQL"
          />
        </div>
        <h2 className="py-4 mt-10">Personal Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PeronalProject
            porjectName={"Dynamic Portfolio Generator"}
            link={"https://github.com/nishanprime/DynamicPortfolioCreator"}
            description={
              "Portfolio Site Generator with custom domain support (Just like this site)"
            }
          />
          <PeronalProject
            porjectName={"Owner Community (FullStack) | Simnova"}
            link={"https://github.com/simnova/ownercommuntiy-data-access"}
            description={"Housing Community Management System"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
