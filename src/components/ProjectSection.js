import React from 'react';
import ProjectColumns from './ProjectColumns';
import '../css/ProjectSection.css';

function ProjectSection({ projects }) {
    return (
        <div>
            <h2 className="ProjectTitle">Project Title</h2>
            <ProjectColumns projects={projects} />
        </div>
    );
}

export default ProjectSection;
