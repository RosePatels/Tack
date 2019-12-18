import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UpdateChannelFormContainer from '../channel_form/update_channel_form_container';

function UpdateChannelModal({ modal, closeModal }) {
    let UpdateChannel = <button className="add-channel-button" onClick={() => dispatch(openModal('Update Channel'))}><i className="fas fa-plus plus-icon"></i>Update Channel</button>;
    if (!modal) {
        return UpdateChannel;
    }
    let component;
    switch (modal) {
        case 'Update Channel':
            component = <UpdateChannelFormContainer />
            break;
        default:
            return null;
    }

    return (
        <div>
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateChannelModal);