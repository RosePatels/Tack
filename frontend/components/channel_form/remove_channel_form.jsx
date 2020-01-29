import React from 'react';

class RemoveChannelForm extends React.Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.props.channelId);
        this.props.closeModal();
    }

    render(){
        return (
            <div className="remove-members-form-container">
                <h2>Remove Channel</h2>
                <p>Are you sure you want to delete the channel? This action will be permanent.</p>
                <form onSubmit={this.handleSubmit} className="remove_members_form">
                    <input className="remove-members-submit" type="submit" value="Yes" />
                    <button onClick={this.props.closeModal} className="remove-members-cancel">No</button>
                </form>
            </div>
        );
    }
}

export default RemoveChannelForm;