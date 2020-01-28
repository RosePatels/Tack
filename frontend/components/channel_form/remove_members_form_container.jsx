import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteChannelMembership } from '../../actions/channel_actions';
import RemoveMembersForm from './remove_members_form';


const mapStateToProps = ({ errors, session, ui }) => {
    return {
        errors: Object.values(errors.session),
        userId: session.id,
        channelId: ui.currentChannelId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (channelId, memberId) => dispatch(deleteChannelMembership(channelId, memberId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveMembersForm);
