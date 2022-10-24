import React from 'react';
import styles from '../styles/Home.module.scss';
import ProjectRow from './ProjectRow';

function ProjectSection({ sectionTitle, projects }) {
    const rows = [];

    projects.forEach((project) => {
        rows.push(<ProjectRow projectData={project} key={project.key.toString()} />);
    });
    return (
        <div className={styles.ProjectSection}>
            <h2 className={styles.SectionTitle}>{sectionTitle}</h2>
            <div>{rows}</div>
        </div>
    );
}

export default ProjectSection;
