import React from 'react';
import './Navbar.css'

const navbar = () => {
    return (
        <header>
        <h2 style={{fontWeight:'700'},{color:'white'}}>SEZIM'S CATS</h2>
            <nav>
                <ul class = "nav__links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">AboutMyCats</a></li>
                    <li><a href="#">Meow</a></li>
                </ul>
            </nav>
            <a class = "cta" href = "#"><button>Call us</button></a>
        </header>
    );
};

export default navbar;