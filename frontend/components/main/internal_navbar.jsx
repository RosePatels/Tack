import React from 'react';
import { Link } from 'react-router-dom';

class InternalNavbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showDropdown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.renderDropdown = this.renderDropdown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    toggleDropdown(event) {
        event.preventDefault();
        this.setState({
            showDropdown: true
        }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showDropdown: false }, () => { document.removeEventListener('click', this.closeMenu) });
    }

    renderDropdown() {
        const { logout } = this.props;
        if (this.state.showDropdown) {
            return (
                <div className="dropdown-channel-gear">
                    <button>Invite Members</button>
                    <button>Update Channel</button>
                    <button>Leave Channel</button>
                    <button>Delete Channel</button>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="main-container">
                    <nav className="internal-navbar">
                        <h2 className="internal-navbar-channel-title"><i className="fas fa-hashtag"></i>{this.props.channel.title}</h2>
                        <div className="channel-dropdown" onClick={this.toggleDropdown}>
                            <i className="fas fa-cog internal-cog"></i>
                            {this.renderDropdown()}
                        </div>
                    </nav>
            </div>
        );
    }
}

export default InternalNavbar;