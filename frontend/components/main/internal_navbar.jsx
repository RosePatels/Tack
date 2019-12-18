import React from 'react';
import { Link } from 'react-router-dom';

class InternalNavbar extends React.Component {
    render() {
        return (
            <div className="main-container">
                    <nav className="internal-navbar">
                        <h2 className="internal-navbar-channel-title"><i className="fas fa-hashtag"></i>{this.props.channel.title}</h2>
                        <i className="fas fa-cog internal-cog"></i>
                    </nav>
            </div>
        );
    }
}

export default InternalNavbar;