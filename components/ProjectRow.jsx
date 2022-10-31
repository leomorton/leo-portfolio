import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function ProjectRow({ projectData }) {
    return (
        <div>
            <h3>{projectData.name}</h3>
            <div>
                <Image src={projectData.imagesrc} width="100" height="50" alt={projectData.name + ' image'} />
            </div>
            <p>~</p>
            <h3>{projectData.client}</h3>
            <div></div>
            <h3>{projectData.year}</h3>
        </div>
    );
}

export default ProjectRow;
