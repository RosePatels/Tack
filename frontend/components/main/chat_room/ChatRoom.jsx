import React from "react";
import MessageForm from './MessageForm';

class ChatRoom extends React.Component {
    constructor(props){
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
    }

    componentDidMount(){
        let {channelId, authorId, fetchChannelMessages } = this.props;
        fetchChannelMessages(channelId)

        App.cable.subscriptions.create(
            { channel: "ChatChannel",
                channel_id: channelId,
                author_id: authorId
            },
            {
                received: data => {
                    debugger;
                    this.setState({
                        messages: this.state.messages.concat([data])
                    });
                },
                speak: function(data) {
                    debugger;
                    return this.perform("speak", data);
                }
            }
        )
    }

    // componentDidUpdate(){
    //     this.bottom.current.scrollIntoView();
    // }

    render(){
        const { users, messages } = this.props;

        const pastMessagesList = Object.values(messages).map((message, i) => {
            return <li key={i}>
                <h5>{users[message.author_id].name}</h5>{message.body}
            </li>
        });
        const messageList = this.state.messages.map((message_data, i) => {
            debugger;
            return (
                <li key={i}>
                    <h5>{users[message_data.author_id].name}</h5>{message_data.message}
                    <div ref={this.bottom} />
                </li>
            )
        });

        return (
            <div className="chatroom-container">
                <div>ChatRoom</div>
                <div className="message-list">{pastMessagesList}</div>
                <div className="message-list">{messageList}</div>
                <MessageForm />
            </div>
        )
    }
}


export default ChatRoom;