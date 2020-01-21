import React from "react";
import { Link } from 'react-router-dom';
import NavBar from '../landing_page/navbar';
import Splash from '../welcome/splash';

const Welcome = ({ currentUser, logout }) => {
    return (
        <>
            <NavBar />
            <Splash />
        </>
    );
}
export default Welcome;
