import React from 'react';
import './Footer.css'
import logo from '../../assets/home/MyLogo.png'

function Footer(props) {
    return (
        <div className='footer-constructor'>
            <div className='footer-logo'>
                <img src={(logo)}/>
            </div>
            <div className='footer-content'>
                <h5>Created by Trinh Cao Cuong in 2022</h5>
                <p>With React JS</p>
                
            </div>

        </div>
    );
}

export default Footer;