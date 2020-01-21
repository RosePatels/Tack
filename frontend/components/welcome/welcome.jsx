import React from "react";
import { Link } from 'react-router-dom';
import NavBar from '../landing_page/navbar';
import SplashContainer from './splash_container';

const Welcome = ({ currentUser, logout }) => {
    return (
        <>
            <NavBar />
            <SplashContainer />
        </>
    );
}
export default Welcome;
