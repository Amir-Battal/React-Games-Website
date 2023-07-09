import React, { useState } from 'react';
import './Navbar.css';
import image1 from '../../assets/images/website_logo.png';

const Navbar = () => {
    const [myLinksVisible, setMyLinksVisible] = useState(false);

    const toggleMyLinks = () => {
        setMyLinksVisible(!myLinksVisible);
    };

    return (
        <nav>
            <div className="regularNav">
                <a className="logo" href="#home">
                    <img src={image1} alt="gaming-website-logo"/>
                    <h1>board</h1>
                </a>
                <ul>
                    <a href="#products"><li>Products</li></a>
                    <a href="#app&games"><li>Apps & Games</li></a>
                    <a href="#features"><li>Features</li></a>
                    <a href="#support"><li>Support</li></a>
                    <a href="#about"><li>About</li></a>
                </ul>
                <a href="#shop-bag"><i className="fa-solid fa-bag-shopping"></i></a>
            </div>

            <div className="topnav">
                <a className="logo" href="#home">
                    <img src={image1} alt="gaming-website-logo"/>
                    <h1>board</h1>
                </a>
                <div className='links' id="myLinks" style={{ display: myLinksVisible ? 'block' : 'none' }}>
                    <a href="#products"><li>Products</li></a>
                    <a href="#app&games"><li>Apps & Games</li></a>
                    <a href="#features"><li>Features</li></a>
                    <a href="#support"><li>Support</li></a>
                    <a href="#about"><li>About</li></a>
                </div>
                <a href="#" className="icon" onClick={toggleMyLinks}>
                <i className="fa fa-bars"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;