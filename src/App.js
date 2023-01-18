import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import './App.css';
import Contact from "./Contact";
import Dance from "./Dance";
import Home from "./Home";
import Team from "./Team";


function App() {
  return (
    <div>

      <div className="heading">
   <h1 className="headingOne">Point.</h1>
   <h4 className="headingTwo">Dance Studio</h4>
      </div>
      
        <Router>
          <nav>
            <Link className="link" to="/">Home</Link>
            <Link  className="link" to="/about">About Us</Link>
            <Link  className="link" to="/dance">Dance Classes</Link>
            <Link  className="link" to="/team">Our Team</Link>
            <Link  className="link" to="/contact">Contact Us</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dance" element={<Dance/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/contact" element={<Contact/>}/>

          </Routes>
        </Router>
    </div>
  );
}

export default App;
