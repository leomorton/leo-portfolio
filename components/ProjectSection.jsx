import React from 'react'
import styles from '../styles/Home.module.scss'
import ProjectRow from './ProjectRow';


function ProjectSection({ sectionTitle, projects }) {
    const rows = [];

    projects.forEach((project) => {
        rows.push(<ProjectRow projectName={project.name} key={project.key.toString()} />)
    })
  return (
      <div className={styles.ProjectSection}>
          <h2>{sectionTitle}</h2>
          <div className={styles.SectionTitle}>{rows}</div>
    </div>
  )
}

export default ProjectSection