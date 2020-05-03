import { connect } from 'react-redux';

import DmDetail from './dm_detail';
import { fetchDm } from '../../actions/dm_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        dm: state.entities.dms[ownProps.match.params.dmId],
        users: state.entities.users,
        currentUserId: state.session.id
    }
};

const mapDispatchToProps = dispatch => ({
    getDm: id => dispatch(fetchDm(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DmDetail);