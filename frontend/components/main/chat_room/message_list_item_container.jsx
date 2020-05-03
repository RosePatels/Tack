import { connect } from 'react-redux';
import MessageListItem from './message_list_item'
import { fetchChannelMessages, fetchMessage, deleteMessageFromChannel, updateMessage } from '../../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        channelId: ownProps.channelId,
        authorId: state.session.id,
        users: state.entities.users,
        messages: state.entities.messages,
        message: ownProps.message,
        dmId: ownProps.dmId
    }
};

const mapDispatchToProps = dispatch => ({
    fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),
    fetchMessage: messageId => dispatch(fetchMessage(messageId)),
    deleteMessage: (messageId) => dispatch(deleteMessageFromChannel(messageId)),
    updateMessage: (message) => dispatch(updateMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageListItem);