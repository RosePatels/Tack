import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateChannelFormContainer from '../channel_form/create_channel_form_container';
import UpdateChannelFormContainer from '../channel_form/update_channel_modal';
import InviteMembersFormContainer from '../channel_form/invite_members_form_container';
import RemoveMembersFormContainer from '../channel_form/remove_members_form_container';
import RemoveChannelFormContainer from '../channel_form/remove_channel_form_container';
import MemberListContainer from '../main/member_list_container';
import AllChannelFormContainer from '../sidebar/all_channel_form_container';
import CreateDmFormContainer from '../sidebar/create_dm_form_container';
import { withRouter } from 'react-router-dom';

function Modal({modal, closeModal}){
    // let addChannel = <button className="add-channel-button" onClick={() => dispatch(openModal('Create Channel'))}><i className="fas fa-plus plus-icon"></i>Add a channel</button>;
    if(!modal){
        return null;
    }
    let component;
    switch(modal){
        case 'Create Channel':
            component = <CreateChannelFormContainer />
            break;
        case 'Update Channel':
            component = <UpdateChannelFormContainer />
            break;
        case 'Invite Members':
            component = <InviteMembersFormContainer />
            break;
        case 'Leave Channel':
            component = <RemoveMembersFormContainer />
            break;
        case 'Remove Channel':
            component = <RemoveChannelFormContainer />
            break;
        case 'Member List':
            component = <MemberListContainer />
            break;
        case 'All Channels':
            component = <AllChannelFormContainer />
            break;
        case 'Dm':
            component = <CreateDmFormContainer />
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

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));