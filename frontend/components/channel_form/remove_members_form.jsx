import React from 'react';

class RemoveMembersForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel_id: '',
            member_id: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.props.channelId, this.props.userId);
        this.props.closeModal();
    }

    render() {
        return (
            <div className="remove-members-form-container">
                <h2>Leave Channel</h2>
                <p>Are you sure you want to leave the channel?</p>
                <form onSubmit={this.handleSubmit} className="remove_members_form">
                    {/* <label>Channel Id</label>
                    <input placeholder="channel id" type="text" value={this.props.channel_id} onChange={this.update('channel_id')} />
                    <label>Member Id</label>
                    <input placeholder="member id" type="text" value={this.props.member_id} onChange={this.update('member_id')} /> */}
                    <input className="remove-members-submit" type="submit" value="Yes" />
                    <button onClick={this.props.closeModal} className="remove-members-cancel">No</button>
                </form>
            </div>
        )
    }
}

export default RemoveMembersForm;