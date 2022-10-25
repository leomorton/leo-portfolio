import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectRow.module.scss';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function ProjectRow({ projectData }) {
    const sections = [];
    sections.push(<h3 key={1} className={styles.projectTitle}>{projectData.name}</h3>);
    sections.push(<div key={2} className={styles.projectThumbnail}><Image src={projectData.imagesrc} width='200' height='100' alt={projectData.name + ' image'} /></div>);
    sections.push(<p key={3} className={styles.projectRowText}>~</p>);
    sections.push(<h3 key={4} className={styles.clientName}>{projectData.client}</h3>);

    const [randomArray, setRandomArray] = useState([]);

    useEffect(() => {
        const randomizeArray = [...sections].sort(() => 0.5 - Math.random());
        setRandomArray(randomizeArray);
    });

    return (
        <div className={styles.projectRow}>
           {randomArray}
        </div>
    );
}

export default ProjectRow;

/*
 <h3 className={styles.projectTitle}>{projectData.name}</h3>
            <div className={styles.projectThumbnail}><Image src={projectData.imagesrc} width='200' height='100' alt={projectData.name + ' image'} /></div>
            <p className={styles.projectRowText}>~</p>
            <h3 className={styles.clientName}>{projectData.client}</h3>
            */