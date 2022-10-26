import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectRow.module.scss';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function ProjectRow({ projectData }) {
    // const [randomArray, setRandomArray] = useState([]);
    // const sections = useMemo(() => {
    //     return [
    //         <h3 key={1} className={styles.projectTitle}>{projectData.name}</h3>,
    //         <div key={2} className={styles.projectThumbnail}><Image src={projectData.imagesrc} width='100' height='50' alt={projectData.name + ' image'} /></div>,
    //         <p key={3} className={styles.projectRowText}>~</p>,
    //         <h3 key={5} className={styles.clientName}>{projectData.client}</h3>,
    //         <div key={4} className={styles.projectLine}></div>,
    //         <h3 key={5} className={styles.projectYear}>{projectData.year}</h3>
    //     ]
    // }, [projectData]);

    // useEffect(() => {
    //     const randomizeArray = [...sections].sort(() => 0.5 - Math.random());
    //     setRandomArray(randomizeArray);
    // }, [sections]);

    return (
        <div className={styles.projectRow}>
            <h3 className={styles.projectTitle}>{projectData.name}</h3>
            <div className={styles.projectThumbnail}>
                <Image src={projectData.imagesrc} width="100" height="50" alt={projectData.name + ' image'} />
            </div>
            <p className={styles.projectRowText}>~</p>
            <h3 className={styles.clientName}>{projectData.client}</h3>
            <div className={styles.projectLine}></div>
            <h3 className={styles.projectYear}>{projectData.year}</h3>
        </div>
    );
}

export default ProjectRow;
