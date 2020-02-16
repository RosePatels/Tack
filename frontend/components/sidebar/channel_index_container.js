import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
    channels: Object.values(state.entities.channels),
    users: state.entities.users,
    currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);

