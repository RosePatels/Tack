import React from 'react';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            private: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkedOff = this.checkedOff.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    checkedOff(event){
        this.setState({
            private: event.currentTarget.checked
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = { author_id: this.props.user_id };
        const channelId = {id: this.props.channelId};
        console.log(channelId);
        const channel = Object.assign({}, this.state, user, channelId);
        console.log(channel);
        this.props.processForm(channel);
        // this.props.closeModal();
    }

    renderErrors() {
        return (
            <ul className="errors-list">
                {this.props.errors.map((error, i) => {
                    return (<li key={`error-${i}`}>{error}</li>);
                })}
            </ul>
        );
    }

    channelFormSubmit() {
        let submitVal = "Update"
        if (this.props.formType === "Create Channel") {
            submitVal = "Create"
        }
        return submitVal;
    }


    render() {
        return (
            <div className="channel-form-container">
                <div className="errors-form">{this.renderErrors()}</div>
                {/* {this.props.otherForm} */}
                <div className="member-list-header">
                    <button onClick={this.props.closeModal}>X</button>
                     <h3>{this.props.formType}</h3>
                </div>
                <p>Channels are where your team communicates. They're best when they are organized around a topic - #marketing, for example.</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Title <span>(required)</span>:</label>
                    <input placeholder="#marketing" type="text" value={this.state.title} onChange={this.update('title')} />
                    <label>Description <span>(required)</span>:</label>
                    <textarea placeholder="The marketing team talks about all things marketing here!" value={this.state.description} onChange={this.update('description')}></textarea>
                    <div className="private-flex">
                        <label>Private <span>(optional)</span>:</label>
                        <input type="checkbox" value={this.state.private} onChange={this.checkedOff} />
                    </div>
                    <div className="channel-form-submit"><input type="submit" value={this.channelFormSubmit()} /></div>
                </form>
            </div>
        );
    }

}

export default ChannelForm;