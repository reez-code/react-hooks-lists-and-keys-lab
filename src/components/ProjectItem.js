import React from "react";

function ProjectItem({ name, about, technologies }) {
  // console.log({ name });
  const technology = technologies.map((element, index) => {
    console.log(element);
    return <span key={index}>{element}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technology}
      </div>
    </div>
  );
}

export default ProjectItem;
