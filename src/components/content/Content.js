import React from 'react';
import {Post} from "./post";

const Content = () => {
    return (
        <div className='content'>
            <div className='firstImgContent'>
            <img src="https://fainaidea.com/wp-content/uploads/2019/10/Snimok-ekrana-2019-10-22-v-22.20.17.png" alt="Main content"/>
            </div>
            <div className='profile'>
                <div className="description">
                    <div className="profilePage">
                <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="Profile"/>
                    </div>
                    <div className='info'>
                        description
                    </div>
                </div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className="postAll">
                    <Post message='Hi, how are you?'/>
                    <Post message="I'm fine."/>
                    <Post message="Good."/>
                    <Post message="How you?"/>
                </div>
            </div>
        </div>
    );
};

export {Content};
