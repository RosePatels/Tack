import React from "react";
import { Link } from 'react-router-dom';

const Client = ({currentUser, logout}) => {
    return (<div className="login-page">
        <nav className="navbar">
            <Link className="logo" to="/"><i className="fas fa-thumbtack"></i>tack</Link>
            <ul className="navbar-links">
                <li><button className="signup-button" onClick={logout}>Logout</button></li>
            </ul>
        </nav>    
    </div>);
};

export default Client;