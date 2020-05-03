import React from 'react';
import { Link } from 'react-router-dom';

class DmNavbar extends React.Component {
    render(){
        const { userName } = this.props;
        return (
           <nav className = "dm-navbar">
                <h2>{userName}</h2>
           </nav>
        )
    }
}

export default DmNavbar;