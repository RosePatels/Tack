import React from 'react';
import InternalNavbarContainer from './internal_navbar_container';

class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                <InternalNavbarContainer />
                <p>Main Component</p>
            </div>
        );
    }
}

export default Main;