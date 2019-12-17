import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannelFormContainer from '../channel_form/create_channel_form_container';

function Modal({modal, closeModal}){
    let addChannel = <button className="add-channel-button" onClick={() => dispatch(openModal('Create Channel'))}><i class="fas fa-plus plus-icon"></i>Add a channel</button>;

    if(!modal){
        return addChannel;
    }
    let component;
    switch(modal){
        case 'Create Channel':
            component = <CreateChannelFormContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);