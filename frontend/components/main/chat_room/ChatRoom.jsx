import React from "react";
import MessageFormContainer from './message_form_container';
import MessageListItemContainer from './message_list_item_container';
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

    
    componentDidUpdate(prevProps){
        if(this.props.channelId !== prevProps.channelId){
            this.props.fetchChannelMessages(this.props.channelId);
        }
        if(this.bottom.current){
            this.bottom.current.scrollIntoView();
        }
    }

    render(){
        const { messages } = this.props;
        const pastMessagesList = Object.values(messages).map((message, i) => {
            return (<li key={i} className="individual-message" >
                <MessageListItemContainer message={message}/>
                <div ref={this.bottom} />
            </li>)
        });
        


        return (
            <div className="chatroom-container">
                <div className="message-list-container">
                    <ul className="message-list">
                        {pastMessagesList}
                    
                    </ul>
                </div>
                {/* <div className="message-list">{messageList}</div> */}
                <div><MessageFormContainer channelId={this.props.channelId} /></div>
            </div>
        )
    }
}


export default ChatRoom;