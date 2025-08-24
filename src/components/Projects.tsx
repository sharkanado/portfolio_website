import React from "react";
import {montserrat, montserratBold} from "../styles/fonts";
import {SectionHeader} from "./Headers";
import Paragraph from "./Paragraph";

const projects = [
  {
    name: "Minecraft Server Website",
    date: "January 2024",
    repo: "https://github.com/sharkanado/mc-vanilla",
    url: "https://test-mcvanilla.netlify.app/",
    description:
      "Freelance commission for the owner of a Minecraft server (no longer active). The project was designed to the client’s specifications and developed using Next.js, TailwindCSS, and TypeScript.",
  },
  {
    name: "Startupz Website",
    date: "November 2023",
    repo: "https://github.com/sharkanado/Startupz",
    url: "https://effervescent-florentine-70ec48.netlify.app/",
    description:
      "A task for a small company based on their design file. Developed with Next.js, SASS and Typescript.",
  },
  {
    name: "Graphic Designer Portfolio",
    repo: "https://github.com/sharkanado/portfolio_HK",
    url: "https://hklimczak.netlify.app/",
    date: "September 2023",
    description:
      "Portfolio page designed for a friend. Made with Next.js, Typescript and SASS.",
  },
];
type Project = {
  description: string;
  url: string;
  date: string;
  repo: string;
  name: string;
};

const Projects = () => {
  return (
    <section className="w-full">
      <div className="container mt-20 mb-10">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionHeader>Projects</SectionHeader>
            <Paragraph align="text-left">
              Selected work built with Next.js, TypeScript, and more.
            </Paragraph>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({project}: {project: Project}) => {
  return (
    <div className="card w-full bg-base-200 transition z-0">
      <div className="card-body">
        <h3
          className={`${montserratBold.className} text-pink card-title text-2xl`}
        >
          {project.name}
        </h3>
        {project.date && (
          <div className={`${montserrat.className} text-sm text-purple`}>
            {project.date}
          </div>
        )}
        <p
          className={`${montserrat.className} leading-7 text-sm text-light-grey`}
        >
          {project.description}
        </p>
        <div className="card-actions justify-end mt-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
            >
              View Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
