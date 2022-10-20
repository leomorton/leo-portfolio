import React from 'react';
import ProjectThumbnail from './ProjectThumbnail';
import '../css/ProjectColumns.css';

function ProjectColumns({ projects }) {
    const rows = [];

    projects.forEach((project) => {
        rows.push(<ProjectThumbnail projectName={project.name} key={project.key.toString()} />);
    });

    return <div className="ProjectColumns">{rows}</div>;
}

export default ProjectColumns;
