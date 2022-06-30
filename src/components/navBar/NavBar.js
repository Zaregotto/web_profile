import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <nav className='nav'>
                <div className="item">
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/settings">Settings</NavLink>
                </div>
            </nav>
        </div>
    );
};

export {NavBar};
