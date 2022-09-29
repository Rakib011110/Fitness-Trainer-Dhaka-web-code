

import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <nav className='header container'>
            <h1 className='fs-1'> Fitness-Trainer-Dhaka</h1>
            <div className='fs-1'>
                <a href="/about">About</a>
            </div>

        </nav>
    );
};

export default Header;