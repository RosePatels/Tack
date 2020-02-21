import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';
import { fetchChannelMessages } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        channelId: ownProps.channelId,
        authorId: state.session.id,
        users: state.entities.users,
        messages: state.entities.messages
    }
};

const mapDispatchToProps = dispatch => ({
    fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
