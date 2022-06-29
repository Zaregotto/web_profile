import React from 'react';
import {Header} from "./components/header";
import {NavBar} from "./components/navBar";

import './app.css'

const App = () => {
  return (
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
      </div>
  );
};

export default App;
