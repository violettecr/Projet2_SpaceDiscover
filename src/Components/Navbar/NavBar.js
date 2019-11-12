import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Css/Common.css';
import './NavBar.css';



function Toogle() {
  var x = document.getElementById("Toogle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

class NavBar extends Component {
  render = () => {
    return (
      <div id="navbar">
        <div className="logo">
          <Link to="/" className="ctn_logo_header">
            <img src="https://image.flaticon.com/icons/svg/2127/2127535.svg" alt="Space Discover" />
          </Link>
        </div> 

        {/* <button onclick="Toogle()">Click Me</button> */}

        <nav id="Toogle">
          
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <Link to="/Sun" className="MenuButton">Planets</Link>
                <ul>
                  <li><Link to="/Sun">Sun</Link></li>
                  <li><Link to="/Mercury">Mercury</Link></li>
                  <li><Link to="/Venus">Venus</Link></li>
                  <li><Link to="/Earth">Earth</Link></li>
                  <li><Link to="/Mars">Mars</Link></li>
                  <li><Link to="/Jupiter">Jupiter</Link></li>
                  <li><Link to="/Saturn">Saturn</Link></li>
                  <li><Link to="/Uranus">Uranus</Link></li>
                  <li><Link to="/Neptun">Neptun</Link></li>
                </ul>        
            </li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/solarsystem">Solar System</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;