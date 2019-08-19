import React from "react";
import MediaQuery from "react-responsive";
import "./style.css";
function ProjectItem({ project }) {
  return (
    <>
        <div className="project_item">
          <h2 className="title">{project.title}</h2>
          <p className="url">{project.url}</p>
          <img className="img" src={project.cover_image} />
        </div>
    </>
  );
}
export default ProjectItem;
