import { connect } from 'react-redux';
import { updateChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';

const mapStateToProps = ({ errors }) => {
    return {
        formType: 'Update Channel',
        errors: Object.values(errors.session)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (channel) => dispatch(updateChannel(channel))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);