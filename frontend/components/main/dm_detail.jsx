import React from 'react';
import DmNavbarContainer from './dm_navbar_container';
import ChatRoomContainer from './chat_room/chatroom_container';

class DmDetail extends React.Component {
    componentDidMount(){
        this.props.getDm(this.props.match.params.dmId);
    }

    render(){
        const { dm, users, currentUserId } = this.props;
        if (!dm) return null;
        let memberOne = dm.memberIds[0];
        let memberTwo = dm.memberIds[1];
        let userName;
        if (memberOne !== currentUserId && users[memberOne]) {
            userName = users[memberOne].name;
        } else if (memberTwo !== currentUserId && users[memberTwo]) {
            userName = users[memberTwo].name;
        } else {
            userName = users[currentUserId].name;
        }
        return (
            <div>
                <DmNavbarContainer userName={userName} />
                <ChatRoomContainer dmId={dm.id} />
            </div>
        )
    }
}

export default DmDetail;