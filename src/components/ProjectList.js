import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectList = projects.map((obj) => {
    // console.log(obj);

    return (
      <ProjectItem
        key={obj.id}
        name={obj.name}
        about={obj.about}
        technologies={obj.technologies}
      />
    );
  });
  // console.log(projectList);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projectList}
      </div>
    </div>
  );
}

export default ProjectList;
