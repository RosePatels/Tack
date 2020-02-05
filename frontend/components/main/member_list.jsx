import React from 'react';

class MemberList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let {channelId, channels, users} = this.props;
        let memberNamesLi = channels[channelId].memberIds.map((userId, i) => {
            return <li key={i}>{users[userId].name}</li>
        })
        return (
            <div>
                <button onClick={this.props.closeModal}>X</button>
                <ul>
                    {memberNamesLi}
                </ul>
            </div>
        );
    }
}

export default MemberList;