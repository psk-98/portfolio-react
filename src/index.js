import React from 'react';
import ReactDOM from 'react-dom';



import reportWebVitals from './reportWebVitals';

import './styles/global.css'
import './styles/home.css'
import './styles/navbar.css'
import './styles/footer.css'

import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'


ReactDOM.render(
  <div className='container'>
    <Navbar/>
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
