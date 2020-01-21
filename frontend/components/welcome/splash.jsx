import React from "react";
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <>
            <h1>testing</h1>
            <video autoPlay muted loop>
                <source src="phone_video.mp4" type="video/mp4"></source>
            </video>
        </>
    );
};

export default Splash;