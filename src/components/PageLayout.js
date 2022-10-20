import React from 'react';
import '../css/PageLayout.css';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import TitleBar from './TitleBar';

function PageLayout() {
    return (
        <div className="PageLayout">
            <TitleBar />
            <ProjectSection />
            <ProjectSection />
            <AboutSection />
        </div>
    );
}

export default PageLayout;
