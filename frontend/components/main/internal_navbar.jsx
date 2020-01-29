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
        const { channel } = this.props;
        if (this.state.showDropdown) {
            return (
                <ul className="dropdown-channel-gear">
                    {this.props.inviteMembersForm(channel.id)}
                    {this.props.removeMembersForm(channel.id)}
                    {this.props.updateChannelForm(channel.id)}
                    {this.props.removeChannelForm(channel.id)}
                </ul>
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