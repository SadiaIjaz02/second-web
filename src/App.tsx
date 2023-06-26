import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import Cards from './components/Cards';
import VideoSection from './components/VideoSection'
import Counts from './components/Counts'
import Services from './components/Services'
import Appointment from './components/Appointment';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import Questions from './components/Questions';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import "bootstrap/dist/css/bootstrap.min.css";// Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";// Bootstrap Bundle JS
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
      <Services/>
      <Appointment/>
      <Departments/>
      <Doctors/>
      <Questions/>
      <Testimonial/>
      <Gallery/>
      <Contact/>
      



    </div>
  );
}

export default App;
