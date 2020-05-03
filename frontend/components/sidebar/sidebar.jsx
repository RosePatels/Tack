import React from 'react';
import { Link } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import DmIndexContainer from './dm_index_container';
import DmIndex from './dm_index';

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
                    <div className="tack-logout-container">
                        <div className="tack-logout-square"><i className="fas fa-thumbtack tack-logout"></i></div>
                    <span className="logout-name">{this.props.currentUser.name}</span>
                    <span className="logout-email">{this.props.currentUser.email}</span>
                    </div>
                    <ul className="logout-links">
                        <li className="logout-button" onClick={logout}><span className="logout-button-name">Logout</span></li>
                    </ul>
                    {/* <button className="logout-button" onClick={logout}>Logout</button> */}
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
                <div className="sidebar-content-container">
                    <div className="thread-link">
                        <Link to={`/client/threads`} ><i className="far fa-comment"></i>Threads</Link>
                    </div>
                    <div className="channels-container">
                        {this.props.channelsIndex}
                        <ChannelIndexContainer />
                    </div>
                    <div className="channel-modal">
                        {/* {<Modal />} */}
                        {this.props.otherForm}
                    </div>
                    <div>
                        {this.props.createDm}
                        <DmIndexContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;