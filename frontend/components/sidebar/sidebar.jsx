import React from 'react';
import CreateChannelContainer from '../channel_form/create_channel_form_container';
import Modal from '../modal/modal';


class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {logout} = this.props
        return (
            <div>
                <button className="signup-button" onClick={logout}>Logout</button>
                <Modal />
            </div>
        );
    }
}

export default Sidebar;