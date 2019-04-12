import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
