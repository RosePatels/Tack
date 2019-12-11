import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
        return (<nav className="navbar">
            <Link className="logo" to="/"><i className="fas fa-thumbtack"></i>tack</Link>
            <ul className="navbar-links">
                <li><Link className="signin-button" to="/login">Sign in</Link></li>
                <li><Link className="signup-button" to="/signup">Sign up!</Link></li>
            </ul>
        </nav>);
};

export default NavBar;