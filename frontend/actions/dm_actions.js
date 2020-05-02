import * as DmApiUtil from '../util/dm_api_util';

export const RECEIVE_DM = "RECEIVE_DM";


const receiveDm = ({ dm, user, other_user }) => {
    debugger;
    return {
        type: RECEIVE_DM,
        dm,
        user,
        other_user
    }
};


export const createDm = (dm, memberId) => dispatch => {
    return DmApiUtil.createDm(dm, memberId).then(response => dispatch(receiveDm(response)));
}

// export const createChannelMembership = (channelId, memberId) => dispatch => {
//     return ChannelApiUtil.addMemberToChannel(channelId, memberId).then(channelMembership => {
//         dispatch(addMember(channelMembership))
//     });
// }