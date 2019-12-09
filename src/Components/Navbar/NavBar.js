import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Css/Common.css';
import './NavBar.css';

import SpaceDiscover from '../images/SpaceDiscover.png';

class NavBar extends Component {
  render = () => {
    return (
      <div id="navbar">
        <div className="logo">
          <Link to={`${process.env.PUBLIC_URL}/`} className="ctn_logo_header">
            <img src={SpaceDiscover} alt="Space Discover" />
          </Link>
        </div>

        <input type="checkbox" id="menu-toggle"/>
        <nav id="Toogle"> 
          <ul>
            <li><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
            <li className="dropdown">
              <Link to={`${process.env.PUBLIC_URL}/Sun`} className="MenuButton">Planets</Link>
                <ul>
                  <li><Link to={`${process.env.PUBLIC_URL}/Sun`}>Sun</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/Mercury`}>Mercury</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/Venus`}>Venus</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/Earth`}>Earth</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/Mars`}>Mars</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/Jupiter`}>Jupiter</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/Saturn`}>Saturn</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/Uranus`}>Uranus</Link></li>
                  <li><Link to={`${process.env.PUBLIC_URL}/Neptun`}>Neptun</Link></li>
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