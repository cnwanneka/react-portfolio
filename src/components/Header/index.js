import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Home from "../../components/Home";
import Projects from "../../components/Projects";
import Contact from '../../components/Contact';
import CV from '../../components/CV';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cv" element={<CV/>}/>
          </Routes>

        </div>
      </HashRouter>
    );
  }
}

export default Header;