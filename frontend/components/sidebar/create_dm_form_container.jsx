import { connect } from 'react-redux';
import CreateDmForm from './create_dm_form';
import { createDm, fetchDm } from '../../actions/dm_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    users: state.entities.users,
    currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    createDm: (dm, memberId) => dispatch(createDm(dm, memberId)),
    fetchDm: (dmId) => dispatch(fetchDm(dmId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateDmForm);