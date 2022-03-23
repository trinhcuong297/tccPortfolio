import React from 'react';
import './Resume.css'

function Resume(props) {
    
    return (
        <div id="scrollspySkill">
            <div className='about-header'>
                <h1>My Skill</h1>
                <h5>What I know?</h5>
                <div className='about-header-endline'>.</div>
            </div>
            <div className='constructor'>

            <div class="skill-bars">
                <div class="bar">
                <div class="info">
                    <span>HTML/CSS</span>
                </div>
                <div class="progress-line html">
                    <span></span>
                </div>
                </div>
                <div class="bar">
                <div class="info">
                    <span>Javascript</span>
                </div>
                <div class="progress-line css">
                    <span></span>
                </div>
                </div>
                <div class="bar">
                <div class="info">
                    <span>React</span>
                </div>
                <div class="progress-line jquery">
                    <span></span>
                </div>
                </div>
                <div class="bar">
                <div class="info">
                    <span>Python</span>
                </div>
                <div class="progress-line python">
                    <span></span>
                </div>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Resume;