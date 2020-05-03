import { connect } from 'react-redux';
import AllUsersIndexItem from './all_users_index_item';
import { createDm } from '../../actions/dm_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: ownProps.user,
        currentUserId: state.session.id,
        users: state.entities.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createDm: (dm, memberId) => dispatch(createDm(dm, memberId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersIndexItem);