
import ContactPage from "./pages/ContactPage";
import ExamplePage from "./pages/ExamplePage";
import HomePage from "./pages/HomePage";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { useState } from 'react';
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Footer from "./components/Footer";




function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/products' element={<Product />}></Route>
          <Route exact path='/example' element={<ExamplePage />}></Route>
          <Route exact path='/contact' element={<ContactPage />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;


{/* <div className='App'>

          <ul>
            <Link to={'/'}>Home</Link> <br />
            <Link to={'/about'}>About Us</Link><br />
            <Link to={'/service'}>Service</Link><br />
            <Link to={'/contact'}>Contact Us</Link><br />
            <Link to={'/classcomponents'}>Class Base components</Link>
          </ul>

        </div> */}