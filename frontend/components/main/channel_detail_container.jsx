import { connect } from 'react-redux';

import ChannelDetail from './channel_detail';
import { fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        channel: state.entities.channels[ownProps.match.params.channelId]
    }
};

const mapDispatchToProps = dispatch => ({
    getChannel: id => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
