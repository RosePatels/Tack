import React from "react";
import { Link } from 'react-router-dom';

const Client = ({currentUser, logout}) => {
    return (<button className="signup-button" onClick={logout}>Logout</button>
        );
};

export default Client;