import { connect } from "react-redux";
import InternalNavbar from "./internal_navbar";
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        channel: ownProps.channel
    };
};


// const mapDispatchToProps = dispatch => {
//     return {
//     updateChannelButton: (
//         <button className="add-channel-button" onClick={() => {
//             dispatch(openModal('Update Channel'))
//         }}><i className="fas fa-plus plus-icon"></i>Update channel</button>
//     )
// }};

const mapDispatchToProps = dispatch => ({
        updateChannelForm: (
        <button className="add-channel-button" onClick={() => {
            dispatch(openModal('Update Channel'))
        }}><i className="fas fa-plus plus-icon"></i>Update channel</button>
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(InternalNavbar);