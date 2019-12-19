import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createChannelMembership } from '../../actions/channel_actions';
import InviteMembersForm from './invite_members_form';


const mapStateToProps = ({errors}) => {
    return {
        errors: Object.values(errors.session)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (channelId, memberId) => dispatch(createChannelMembership(channelId, memberId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteMembersForm);
