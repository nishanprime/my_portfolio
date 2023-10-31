import React from "react";
import SkillCard from "./SkillCard";
const skillsInfo = [
  {
    skillName: "HTML",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    skillName: "JAVASCRIPT",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    skillName: "TYPESCRIPT",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    skillName: "REACT.JS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    skillName: "Express.JS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  },

  {
    skillName: "POSTGRESQL",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    skillName: "GraphQL",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    skillName: "DevOps",
    imgLink: "/assets/devops.png",
  },

  {
    skillName: "PYTHON",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    skillName: "C",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    skillName: "CSS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  {
    skillName: "BASH",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  },
  {
    skillName: "NodeJS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    skillName: "MongoDB",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    skillName: "TailwindCSS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    skillName: "Bootstrap",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    skillName: "NextJS",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    skillName: "Docker",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    skillName: "Redux",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    skillName: "GIT",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    skillName: "DigitalOcean",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
  },
  {
    skillName: "Azure",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    skillName: "VSCode",
    imgLink:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];
const Skills = () => {
  return (
    <div
      id="skills"
      className="sm:text-center lg:text-left w-full lg:h-screen p-2"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsInfo.map((skill) => (
            <SkillCard
              imgLink={skill.imgLink}
              skillName={skill.skillName}
              key={skill.imgLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
