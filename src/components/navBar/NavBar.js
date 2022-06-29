import React from 'react';
import {Content} from "../content";

const NavBar = () => {
    return (
        <div className="navBar">
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Massages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <Content/>
        </div>
    );
};

export {NavBar};
