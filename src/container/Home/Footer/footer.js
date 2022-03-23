import React from 'react';
import "./footer.css"

function HomeFooter(props) {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={require('../../../assets/home/shape-bg.png')} alt='No internet connection'/>
            </div>
        </div>
    );
}

export default HomeFooter;