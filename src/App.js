import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from "./components/pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    </div>
    <div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
