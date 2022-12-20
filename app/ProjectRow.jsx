"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectRow({ projectData }) {
    return (
        <Link href={`./${projectData.projectId}`}>
            <div className="py-4 cursor-pointer projectRow">
                <div className="flex justify-between gap-2 md:gap-4">
                    <h3 className="my-auto text-2xl md:text-5xl">&lt;~</h3>
                    <h3 className="my-auto w-fit text-2xl md:text-5xl projectTitle">{projectData.name}</h3>
                    <div className="m-auto grow h-px bg-white"></div>
                    <div className="hidden my-auto h-[48px] min-w-[96px] md:flex visible">
                        <Image src={projectData.imagesrc} width="96" height="48" alt={projectData.name + " image"} />
                    </div>
                </div>
                <div className="flex justify-between gap-2 md:gap-4">
                    <h3 className="my-auto text-1xl md:text-3xl w-auto">{projectData.client}</h3>
                    <div className="m-auto grow h-px bg-white"></div>
                    <h3 className="my-auto text-2xl md:text-3xl">{projectData.year}</h3>
                    <h3 className="my-auto text-2xl md:text-5xl">~&gt;</h3>
                </div>
            </div>
        </Link>
    );
}

export default ProjectRow;
