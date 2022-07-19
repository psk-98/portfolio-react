import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

import reportWebVitals from './reportWebVitals';

import './styles/global.css'
import './styles/home.css'
import './styles/navbar.css'
import './styles/footer.css'

ReactDOM.render(
  <Router>
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/github' element={() => {
          window.location.href('https://github.com/psk-98')
          return null
        }}/>
      </Routes>
      <Footer/>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
