import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

function ProjectRow({ projectData }) {
    const imgStyle = {
        margin: '0px 10px'
    }

    return (
        <div className={styles.projectRow}>
            <h3 className={styles.projectTitle}>{projectData.name}</h3>
            <Image className={styles.projectThumbnail} layout='fixed' src={projectData.imagesrc} style={imgStyle} width='200' height='100' alt={projectData.name + ' image'} />
            <p className={styles.projectRowText}>~</p>
            <h3 className={styles.clientName}>{projectData.client}</h3>
        </div>
    );
}

export default ProjectRow;
