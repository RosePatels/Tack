import {connect} from 'react-redux';
import { deleteChannel } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';
import RemoveChannelForm from './remove_channel_form';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: Object.values(state.errors.session),
        channelId: state.ui.currentChannelId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (channelId) => dispatch(deleteChannel(channelId)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveChannelForm);