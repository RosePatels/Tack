import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
        return (<nav className="navbar">
            <Link className="logo" to="/"><i className="fas fa-thumbtack"></i>tack</Link>
            <div className="navbar-links-container">
                <ul className="navbar-portfolio-links">
                    <li><a href="https://www.shreejpatel.com" target="_blank" className="navbar-portfolio-link">Portfolio</a></li>
                    <li><a href="https://github.com/ShreePatel95" target="_blank" className="navbar-portfolio-link">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/shree1795/" target="_blank" className="navbar-portfolio-link">LinkedIn</a></li>
                    <li><a href="https://angel.co/shree-patel" target="_blank" className="navbar-portfolio-link">Angel List</a></li>
                </ul>
                <ul className="navbar-links">
                    <li><Link className="signin-button" to="/login">Sign in</Link></li>
                    <li><Link className="signup-button" to="/signup">Sign up!</Link></li>
                </ul>
            </div>
        </nav>);
};

export default NavBar;