import React from 'react';
import './style.css';
function ProjectItem({ project }) {
    return (
        <>
            <div className="projectContainer">
                <p>{project.title}</p>
            </div>
        </>
    );
}
export default ProjectItem