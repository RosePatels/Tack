import React from 'react';
import { Link } from 'react-router-dom';

class InternalNavbar extends React.Component {
    render() {
        return (
            <div className="main-container">
                    <nav className="navbar">
                        <Link to="/">internal navbar</Link>
                    </nav>
            </div>
        );
    }
}

export default InternalNavbar;