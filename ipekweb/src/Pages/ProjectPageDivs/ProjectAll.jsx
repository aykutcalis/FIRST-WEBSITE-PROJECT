import React from "react";
import "../../styles/Home.css";
import "../../styles/Services.css";
import { ProjectEngineering } from "./ProjectEngineering";
import { ProjectIndustry } from "./ProjectIndustry";
import { ProjectEnvironment } from "./ProjectEnvironment";

export const ProjectAll = () => {
  return (
    <div>
      <ProjectEnvironment />
      <ProjectIndustry />
      <ProjectEngineering />
    </div>
  );
};
