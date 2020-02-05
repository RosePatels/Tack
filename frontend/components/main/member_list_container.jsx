import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import MemberList from './member_list';

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        channels: state.entities.channels,
        channelId: state.ui.currentChannelId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);