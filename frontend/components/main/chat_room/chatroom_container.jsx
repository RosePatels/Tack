import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';
import { fetchChannelMessages, fetchMessage, deleteMessageFromChannel, fetchDmMessages } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        channelId: ownProps.channelId,
        authorId: state.session.id,
        users: state.entities.users,
        messages: state.entities.messages,
        dmId: ownProps.dmId
    }
};

const mapDispatchToProps = dispatch => ({
    fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),
    fetchMessage: messageId => dispatch(fetchMessage(messageId)),
    deleteMessage: (channelId, messageId) => dispatch(deleteMessageFromChannel(channelId, messageId)),
    fetchDmMessages: dmId => dispatch(fetchDmMessages(dmId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
