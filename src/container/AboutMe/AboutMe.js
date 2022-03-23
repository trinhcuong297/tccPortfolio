import React from 'react';
import AboutImg from '../../assets/AboutMe/me.jpg'
import './AboutMe.css'

function AboutMe(props) {
    return (
        <div className='about-constructor' id='scrollspyAboutMe'>
            <div className='about-header'>
                <h1>About Me</h1>
                <h5>Why chose me?</h5>
                <div className='about-header-endline'>.</div>
            </div>
            <div className='about-body'>

                <div className='about-content'>
                    <div className='content-item item-left'>
                        <img src={(AboutImg)}/>
                    </div>
                    <div className='content-item item-right'>
                        <div className='intro'>
                            <p>Hi, I'm Trinh Cao Cuong from Viet Nam.<br/> I'm a developer with experience in building websites and web app, Android app for small and medium sized businesses.</p>
                        </div>
                        <div className='highlight'>
                            <h4>Here is Few Highlight</h4>
                            <p>Front-End Web Developer</p>
                            <p>React and React Native</p>
                            <p>Introduction and Controler Engineering</p>
                            <p>Build SmartHome and IoT application</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;