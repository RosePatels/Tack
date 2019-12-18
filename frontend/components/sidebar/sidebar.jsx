import React from 'react';
import CreateChannelContainer from '../channel_form/create_channel_form_container';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import ChannelIndexContainer from './channel_index_container';
import ChannelIndex from './channel_index';


class Sidebar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showDropdown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.renderDropdown = this.renderDropdown.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    toggleDropdown(event){
        event.preventDefault();
            this.setState({
                showDropdown: true
            }, () => {
                document.addEventListener('click', this.closeMenu);
            });
    }

    closeMenu(){
        this.setState({showDropdown: false}, () => { document.removeEventListener('click', this.closeMenu)});
    }

    renderDropdown(){
        const { logout } = this.props;
        if (this.state.showDropdown){
            return (
                <div className="dropdown-logout">
                    <button className="signup-button" onClick={logout}>Logout</button>
                </div>
            )
        } else {
            return null
        }
    }
    render() {
        const {logout, session, user} = this.props
        return (
            <div className="sidebar-container">
                <div className="client-logo-dropdown" onClick={this.toggleDropdown}>
                    <h2 className="client-logo">tack-aa<i className="fas fa-angle-down arrow-down"></i></h2>
                    <p className="client-logo-name"><i className="fas fa-thumbtack tack-size"></i>{this.props.currentUser.name}</p>
                </div>
                {this.renderDropdown()}
                <div className="thread-link">
                    <Link to={`/client/threads`} ><i className="far fa-comment"></i>Threads</Link>
                </div>
                <div className="channels-container">
                    <h3 className="channels-header">Channels</h3>
                    <ChannelIndexContainer />
                </div>
                <div className="channel-modal">
                    <Modal />
                </div>
            </div>
        );
    }
}

export default Sidebar;