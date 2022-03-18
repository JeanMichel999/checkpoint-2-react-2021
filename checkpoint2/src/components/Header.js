import React from 'react';
import "./Header.css"

const Header = (props) => {
    return (
        <div className='header'>
            <h1>CheckPoint 2 - Show All Games</h1>
            <h3>proposé par {props.name}</h3>
        </div>
    );
};

export default Header;