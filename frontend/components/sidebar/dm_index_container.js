import { connect } from 'react-redux';
import DmIndex from './dm_index';
import { fetchDms } from '../../actions/dm_actions';

const mapStateToProps = state => ({
    dms: Object.values(state.entities.dms),
    users: state.entities.users,
    currentUserId: state.session.id
});


const mapDispatchToProps = dispatch => ({
    fetchDms: () => dispatch(fetchDms())
})

export default connect(mapStateToProps, mapDispatchToProps)(DmIndex);