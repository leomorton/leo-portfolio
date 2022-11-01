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
        <div className="py-4">
            <div className="flex justify-between gap-6">
                <h3 className="my-auto text-5xl md:text-7xl">{projectData.name}</h3>
                <div className="m-auto grow h-px bg-white"></div>
                <div className="my-auto h-[50px] min-w-[100px]">
                    <Image src={projectData.imagesrc} width="100" height="50" alt={projectData.name + ' image'} />
                </div>
            </div>
            <div className="flex justify-between gap-6">
                <h3 className="my-auto text-2xl md:text-3xl">{projectData.client}</h3>
                <div className="m-auto grow h-px bg-white"></div>
                <h3 className="my-auto text-2xl md:text-3xl">{projectData.year}</h3>
            </div>
        </div>
    );
}

export default ProjectRow;
