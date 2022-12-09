"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function ProjectRow({ projectData }) {
    return (
        <Link href="./project">
            <div className="py-4 cursor-pointer projectRow">
                <div className="flex justify-between gap-6">
                    <h3 className="my-auto w-fit text-2xl md:text-5xl projectTitle">&lt;~ {projectData.name}</h3>
                    <div className="m-auto grow h-px bg-white"></div>
                    <div className="hidden my-auto h-[60px] min-w-[120px] md:flex visible">
                        <Image src={projectData.imagesrc} width="120" height="60" alt={projectData.name + " image"} />
                    </div>
                </div>
                <div className="flex justify-between gap-6">
                    <h3 className="my-auto text-1xl md:text-3xl w-auto">{projectData.client}</h3>
                    <div className="m-auto grow h-px bg-white"></div>
                    <h3 className="my-auto text-2xl md:text-3xl">{projectData.year} ~&gt;</h3>
                </div>
            </div>
        </Link>
    );
}

export default ProjectRow;
