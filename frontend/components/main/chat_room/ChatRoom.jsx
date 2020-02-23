import React from "react";
import MessageFormContainer from './message_form_container';

class ChatRoom extends React.Component {
    constructor(props){
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
    }

    componentDidMount(){
        let {channelId, authorId, fetchChannelMessages, fetchMessage } = this.props;
        fetchChannelMessages(channelId);

        App.cable.subscriptions.create(
            { channel: "ChatChannel",
                channel_id: channelId,
                author_id: authorId
            },
            {
                received: data => {
                    this.props.fetchMessage(data.message_id)
                },
                speak: function(data) {
                    return this.perform("speak", data);
                }
            }
        )
    }

    // componentDidUpdate(){
    //     this.bottom.current.scrollIntoView();
    // }
    
    componentDidUpdate(prevProps){
        if(this.props.channelId !== prevProps.channelId){
            this.props.fetchChannelMessages(this.props.channelId);
        }
    }

    render(){
        const { users, messages } = this.props;
        const pastMessagesList = Object.values(messages).map((message, i) => {
            return <li key={i}>
                <h5>{users[message.author_id].name}</h5>{message.body}
            </li>
        });
      

        

        return (
            <div className="chatroom-container">
                <div>ChatRoom</div>
                <div className="message-list">{pastMessagesList}</div>
                {/* <div className="message-list">{messageList}</div> */}
                <MessageFormContainer channelId={this.props.channelId}/>
            </div>
        )
    }
}


export default ChatRoom;