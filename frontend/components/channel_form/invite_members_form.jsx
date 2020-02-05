import React from 'react';

class InviteMembersForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            member_id: ''
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.onButton = this.onButton.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    onButton(val) {
        this.props.processForm(this.props.channelId, val);
        this.props.closeModal();
    }

    render(){
        let { users, channels, channelId } = this.props;
        let invitedUsers = channels[channelId].memberIds;
        let notInvitedUsersLi = Object.values(users).map((user, i) => {
            if(!invitedUsers.includes(user.id)){
                return <li key={i}><button onClick={() => this.onButton(user.id)}>{user.name}</button></li>
            }
        });
        return (
            <div>
                <button onClick={this.props.closeModal}>X</button>
                <ul>
                    {notInvitedUsersLi}
                </ul>
            </div>
        )
    }
}

export default InviteMembersForm;