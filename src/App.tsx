import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import Cards from './components/Cards';
import VideoSection from './components/VideoSection'
import Counts from './components/Counts'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";





function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainBody/>
      <Cards/>
      <VideoSection/>
      <Counts/>



    </div>
  );
}

export default App;
