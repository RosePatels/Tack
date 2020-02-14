import { connect } from "react-redux";
import InternalNavbar from "./internal_navbar";
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        channel: ownProps.channel,
        users: state.entities.users
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

// const mapDispatchToProps = dispatch => ({
//         inviteMembersForm: (
//             <li onClick={() => {
//                 dispatch(openModal('Invite Members'))
//             }}>Invite Members</li>
//         ),
//         removeMembersForm: (
//             <li onClick={() => {
//                 dispatch(openModal('Remove Members'))
//             }}>Remove Members</li>
//         ),
//         updateChannelForm: (
//             <li onClick={() => {
//                 dispatch(openModal('Update Channel'))
//                 }}>Update channel</li>
//     )
// });

const mapDispatchToProps = dispatch => ({
    inviteMembersForm: (channelId) => {
       return ( <li onClick={() => {
            dispatch(openModal('Invite Members', channelId))
       }}>Invite Members</li> )
    },
    removeMembersForm: (channelId) => {
        return (<li onClick={() => {
            dispatch(openModal('Leave Channel', channelId))
        }}>Leave Channel</li>)
    },
    updateChannelForm: (channelId) => {
        return (<li onClick={() => {
            dispatch(openModal('Update Channel', channelId))
        }}>Update channel</li>)
    },
    removeChannelForm: (channelId) => {
        return (<li onClick={() => {
            dispatch(openModal('Remove Channel', channelId))
        }}>Remove Channel</li>)
    },
    memberList: (channelId, memberIdCount) => {
        return (<p onClick={() => {
            dispatch(openModal('Member List', channelId))
        }} className="member-id-count"><i className="far fa-user"></i> {memberIdCount}</p>)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(InternalNavbar);