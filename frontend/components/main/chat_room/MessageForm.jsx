import React from "react";

class MessageForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { body: "", channel_id: this.props.channelId };
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body, channel_id: this.state.channel_id });
        this.setState({ body: ""});
    }

    componentDidUpdate(prevProps) {
        if (this.props.channelId !== prevProps.channelId) {
            this.setState({channel_id: this.props.channelId})
        }
    }


    render(){
        return (
            <div className="message-form-container">
                <form className="message-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.body} onChange={this.update("body")} placeholder={"Message #" + this.props.channels[this.state.channel_id].title + ". Press enter to submit message"} />
                    {/* <input type="submit" /> */}
                </form>
            </div>
        )
    }
}

export default MessageForm;