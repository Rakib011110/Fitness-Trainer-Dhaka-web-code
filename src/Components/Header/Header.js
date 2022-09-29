

import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <nav className='header container'>
            <h1 className='fs-1'> UtRA-Active-club</h1>
            <div className='fs-1'>
                <a href="/Gym-List">Gym-List</a>
            </div>

        </nav>
    );
};

export default Header;