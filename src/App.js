// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './pages/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import ES6 from './pages/ES6';
import ArrowFunction from './pages/ArrowFunction';
import TernaryOp from './pages/TernaryOp';
import Map from './pages/Map';
import Parentcom from './component/Parentcom';
import Home from './component/Home';
import Usestate from './component/Usestate';
import UseEffect from './component/UseEffect';
import ParentComp from './component/ParentComp';

// import Header from './pages/Header';
function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/es6" element={<ES6 />} />
        <Route path="/ArrowFunction" element={<ArrowFunction />} />
        <Route path="/TernaryOp" element={<TernaryOp />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/props" element={<Parentcom />} />
        <Route path="/state" element={<Usestate/>} />
        <Route path="/effect" element={<UseEffect />} />
        <Route path="/props2" element={<ParentComp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
