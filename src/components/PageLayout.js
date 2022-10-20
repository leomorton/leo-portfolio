import React from 'react';
import '../css/PageLayout.css';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import TitleBar from './TitleBar';

const ProfessionalProjects = [
    { key: 1, name: 'Project1', imagesrc: '', description: "it's the first project" },
    { key: 2, name: 'Project2', imagesrc: '', description: "it's the second project" },
    { key: 3, name: 'Project3', imagesrc: '', description: "it's the third project" },
    { key: 4, name: 'Project4', imagesrc: '', description: "it's the fourth project" },
];

const PersonalProjects = [
    { key: 1, name: 'Project P 1', imagesrc: '', description: "it's the first personal project" },
    { key: 2, name: 'Project P 2', imagesrc: '', description: "it's the second personal project" },
    { key: 3, name: 'Project P 3', imagesrc: '', description: "it's the third personal project" },
    { key: 4, name: 'Project P 4', imagesrc: '', description: "it's the fourth personal project" },
    { key: 5, name: 'Project P 5', imagesrc: '', description: "it's the fifth personal project" },
    { key: 6, name: 'Project P 6', imagesrc: '', description: "it's the sixth personal project" },
];

function PageLayout() {
    return (
        <div className="PageLayout">
            <TitleBar />
            <ProjectSection projects={ProfessionalProjects} />
            <ProjectSection projects={PersonalProjects} />
            <AboutSection />
        </div>
    );
}

export default PageLayout;
