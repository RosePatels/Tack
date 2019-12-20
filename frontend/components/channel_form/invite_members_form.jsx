import React from 'react';

class InviteMembersForm extends React.Component {
    constructor(props){
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
        const channel_id = this.state.channel_id;
        this.props.processForm(this.state.channel_id, this.state.member_id);
    }

    render(){
        return (
            <div>
                <button onClick={this.props.closeModal}>X</button>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <label>Channel Id</label>
                    <input placeholder="channel id" type="text" value={this.state.channel_id} onChange={this.update('channel_id')} />
                    <label>Member Id</label>
                    <input placeholder="member id" type="text" value={this.state.member_id} onChange={this.update('member_id')} />
                    <input className="session-form-submit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default InviteMembersForm;