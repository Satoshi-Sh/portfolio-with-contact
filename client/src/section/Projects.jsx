import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Mastlog",
    technologies: ["TypeScript", "React.js", "Express.js", "MongoDB"],
    image: "/images/mastlog.gif",
    description:
      "This react application was built to show my archived Mastodon toots data. Users can filter my toots by hashtag,mention, date, and also can search toots by keyword. It keep records of my programming learning journey",
    github: "https://github.com/Satoshi-Sh/mastlog",
    livepage: "https://satoshis-developer.xyz/mastlog/",
  },
  {
    title: "Team Todo",
    technologies: ["React.js", "Express.js", "MongoDB", "WebSocket"],
    image: "/images/team-todo-demo.gif",
    description:
      "This application allows users to create projects and other members take todo tasks. It features real-time updates using websockets to show the status of projects as well as a chat function for communication among team members. This enables seamless collaboration, task assignment, progress tracking, and communication within the application.",
    github: "https://github.com/Satoshi-Sh/team-todo",
  },
  {
    title: "Web Dev Path",
    technologies: ["Next.js"],
    image: "/images/web-dev-path.jpg",
    description:
      "I'm actively contributing to the open-source initiative project 'Web Dev Path,' where I collaborate on the development and maintenance of a Next.js web application in a simulated professional environment. I'm proud of my contributions, which include integrating Google Analytics, fixing mobile views, reviewing codes and so on.",
    livepage: "https://www.webdevpath.co/",
    github: "https://github.com/Web-Dev-Path/web-dev-path",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="px-20">
      <h2 className="text-[3rem] font-thin">Projects</h2>
      <div className="flex flex-col gap-10 items-center m-10">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
