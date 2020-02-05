import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createChannelMembership } from '../../actions/channel_actions';
import InviteMembersForm from './invite_members_form';


const mapStateToProps = (state) => {
    return {
        errors: Object.values(state.errors.session),
        channelId: state.ui.currentChannelId,
        channels: state.entities.channels,
        users: state.entities.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (channelId, memberId) => dispatch(createChannelMembership(channelId, memberId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteMembersForm);
