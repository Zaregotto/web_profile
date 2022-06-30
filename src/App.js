import React from 'react';
import {Header} from "./components/header";
import {NavBar} from "./components/navBar";
import {Content} from "./components/content";
import {Dialogs} from "./components/dialogs";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import './app.css'
import {News} from "./components/news";
import {Music} from "./components/music";
import {Settings} from "./components/settings";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='app-wrapper-content'>
                <NavBar/>
                <Routes>
                    <Route path='profile' element={<Content/>}/>
                    <Route path='dialogs' element={<Dialogs/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='music' element={<Music/>}/>
                    <Route path='Settings' element={<Settings/>}/>
                    <Route path='/' element={<Content/>}/>
                </Routes>
                {/*<Content/>*/}
                {/*<Dialogs/>*/}
            </div>
        </div>
    );
};

export default App;
