import { connect } from 'react-redux';
import AllChannelForm from './all_channel_form';
import { fetchChannels } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
    channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllChannelForm);

