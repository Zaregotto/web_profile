import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="message">
                <div>
                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/Wojak.png/200px-Wojak.png" alt="PostImage"/>
                </div>
                <div>
                { props.message }
            </div>
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export {Post};
