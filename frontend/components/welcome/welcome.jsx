import React from "react";
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Login</Link>
            <span>or</span>
            <Link to="/signup">Sign up!</Link>
        </nav>
    );  

    const loggedInWelcome = () => (
        <nav>
            <h2>Hi, {currentUser.email}</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

        return currentUser ? loggedInWelcome() : sessionLinks();
};

export default Welcome;
