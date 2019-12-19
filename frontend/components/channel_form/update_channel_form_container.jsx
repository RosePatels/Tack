import { connect } from 'react-redux';
import { updateChannel } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';
import ChannelForm from './channel_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        formType: 'Update Channel',
        errors: Object.values(state.errors.session),
        channelId: state.ui.currentChannelId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (channel) => dispatch(updateChannel(channel)),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));