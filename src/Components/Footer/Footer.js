import React from 'react';
import './Footer.css'

function Footer() {
    return (
      
        <footer> 
            <div className="ctn_description_footer">
                <img src="https://image.flaticon.com/icons/svg/2127/2127535.svg" alt="Space Discover"/>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="link">Page One</a></li>
                    <li><a href="link">Page Two</a></li>
                    <li><a href="link">Page Three</a></li>
                    <li><a href="link">Contact</a></li>
                </ul>
            </nav>
            <div className="ctn_go_top">
                <a href="#navbar">
                <img src="https://image.flaticon.com/icons/svg/2240/2240693.svg" alt="Go Top"/>
                </a>
            </div>
        </footer>

    );
}

export default Footer;
