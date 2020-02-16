import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';


const mapStateToProps = (state, ownProps) => {
    return {
        channelId: ownProps.channelId,
        authorId: state.session.id
    }
};

const mapDispatchToProps = dispatch => ({
    getChannel: id => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
