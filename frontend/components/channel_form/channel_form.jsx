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

    additionalInputs() {
        let inputs = (
            <>
                <p>Enter your <strong>name</strong>, <strong>avatar url</strong>, <strong>email</strong> and <strong>password</strong></p>
                <input type="text" placeholder="name" value={this.state.name} onChange={this.update('name')} />
                <input type="text" placeholder="avatar url" value={this.state.avatar_url} onChange={this.update('avatar_url')} />
            </>
        );
        if (this.props.formType === 'Sign In') {
            inputs = (<>
                <p>Enter your <strong>email</strong> and <strong>password</strong></p></>);
            return inputs;
        } else {
            return inputs;
        }
    }

    render() {
        return (
            <div>
                {/* <div className="errors-form">{this.renderErrors()}</div> */}
                {/* {this.props.otherForm} */}
                <button onClick={this.props.closeModal}>X</button>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <label>Title:</label>
                    <input placeholder="title" type="text" value={this.state.title} onChange={this.update('title')} />
                    <label>Description:</label>
                    <textarea value={this.state.description} onChange={this.update('description')}></textarea>
                    <label>Private:</label>
                    <input type="checkbox" value={this.state.private} onChange={this.checkedOff} />
                    <input className="session-form-submit" type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }

}

export default ChannelForm;