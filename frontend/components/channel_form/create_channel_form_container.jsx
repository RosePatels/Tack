import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import ChannelForm from './channel_form';

const mapStateToProps = ({ errors, session }) => {
    return {
        formType: 'Create Channel',
        errors: Object.values(errors.session),
        user_id: session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (channel) => dispatch(createChannel(channel)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);