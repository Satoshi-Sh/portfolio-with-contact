import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="p-10 min-w-[280px] max-w-[800px] block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <img
        className="rounded-t-lg"
        src={project.image}
        alt="application overview"
      />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {project.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {project.description}
        </p>
        <div className="flex items-center justify-center gap-3">
          {project.livepage && (
            <a
              href={project.livepage}
              target="_blank"
              className="p-1 border-slate-200 border-solid border-2  hover:bg-green-300 hover:text-white"
            >
              Live Page
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="p-1 border-slate-200 border-solid border-2 hover:bg-green-300 hover:text-white"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
