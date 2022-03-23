import React from 'react';
import Profile from './Profile/Profile';
import HomeFooter from './Footer/footer';
import './home.css'
import Header from './Header/Header';

function Home(props) {
    return (
        <div className='home-container' id='scrollspyHome'>
            <Header/>
            <Profile/>
            <HomeFooter/>
        </div>
    );
}

export default Home;