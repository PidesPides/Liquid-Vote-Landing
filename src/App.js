import React, {Component} from 'react';
import { HashRouter, Router, Routes, Route} from 'react-router-dom';

//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Component/Common/Header/Header.js';
import Welcome from './Component/Common/Cards/Welcome.js';
import Compare from './Component/Common/Cards/Compare.js';
import Decide from './Component/Common/Cards/Decide.js';
import Gallery from './Component/Common/Cards/Gallery.js';
import Downloads from './Component/Common/Cards/Downloads.js';
import Footer from './Component/Common/Footer/Footer.js';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Welcome />
        <Compare />
        <Decide />
        <Gallery />
        <Downloads />
        <Footer />
      </div>
    );
  }
}

export default App;


