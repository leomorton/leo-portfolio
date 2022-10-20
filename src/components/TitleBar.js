import React from 'react';
import '../css/TitleBar.css';
import ContactButton from './ContactButton';
import TitleFrame from './TitleFrame';

function TitleBar() {
    return (
        <div className="TitleBar">
            <TitleFrame />
            <ContactButton />
        </div>
    );
}

export default TitleBar;
