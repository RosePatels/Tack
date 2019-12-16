import React from "react";
import { Link } from 'react-router-dom';
import SidebarContainer from '../sidebar/sidebar_container';
import Main from '../main/main';


const Client = () => {
    return (
        <div className="client-layout">
            <SidebarContainer />
            <Main />
        </div>
        );
};

export default Client;