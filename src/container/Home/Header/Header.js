import React from 'react';
import './Header.css'
import logo from '../../../assets/home/MyLogo.png'

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                    
                <a className="navbar-brand" href="#scrollpyHome">
                    <img className="logo" src={logo} alt="logo..."/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#scrollspyHome">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyAboutMe">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspySkill">Skill</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyExp">Experience</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollpyContact">Contact me</a>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </div>
    );
}

export default Header;