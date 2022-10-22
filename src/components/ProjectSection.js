import React from 'react';
import ProjectRow from './ProjectRow';
import '../css/ProjectSection.css';

function ProjectSection({ projects }) {
    const rows = [];

    projects.forEach((project) => {
        rows.push(<ProjectRow projectName={project.name} key={project.key.toString()} />);
    });

    return (
        <div>
            <h2 className="ProjectTitle">Project Title</h2>
            <div className="ProjectRows">{rows}</div>
        </div>
    );
}

export default ProjectSection;
