import React from 'react';
import ProjectColumns from './ProjectColumns';
import '../css/ProjectSection.css';

function ProjectSection() {
    return (
        <div>
            <h2 className="ProjectTitle">Project Title</h2>
            <ProjectColumns />
        </div>
    );
}

export default ProjectSection;
