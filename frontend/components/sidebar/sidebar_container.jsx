import { connect } from "react-redux";
import Sidebar from './sidebar';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    otherForm: (
        <button className="add-channel-button" onClick={() => {
            dispatch(openModal('Create Channel'))
        }}><i className="fas fa-plus plus-icon"></i>Add a channel</button>
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);