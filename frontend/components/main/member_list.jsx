import React from 'react';

class MemberList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let {channelId, channels, users} = this.props;
        let memberNamesLi = channels[channelId].memberIds.map((userId, i) => {
            return <li className="member-name" key={i}><i className="fas fa-thumbtack tack-size"></i>{users[userId].name}<div class="circle"></div></li>
        })
        return (
            <div className="member_list">
                <div className="member-list-header">
                    <button onClick={this.props.closeModal}>X</button>
                    <h3>{channels[channelId].memberIds.length} members in {channels[channelId].title}</h3>
                </div>
                <ul className="member-names-list">
                    {memberNamesLi}
                </ul>
            </div>
        );
    }
}

export default MemberList;