import { connect } from 'react-redux';
import MessageForm from './MessageForm';
import { fetchChannelMessages, fetchMessage } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        channelId: ownProps.channelId,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),
    fetchMessage: messageId => dispatch(fetchMessage(messageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
