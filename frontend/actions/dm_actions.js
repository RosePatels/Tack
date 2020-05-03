import * as DmApiUtil from '../util/dm_api_util';

export const RECEIVE_DMS = "RECEIVE_DMS";
export const RECEIVE_DM = "RECEIVE_DM";

const receiveDms = dms => ({
    type: RECEIVE_DMS,
    dms
})

const receiveDm = ({ dm, user, other_user }) => {
    return {
        type: RECEIVE_DM,
        dm,
        user,
        other_user
    }
};

export const fetchDms = () => dispatch => {
    return DmApiUtil.fetchDms().then(dms => {
        dispatch(receiveDms(dms))
    })
};

export const createDm = (dm, memberId) => dispatch => {
    return DmApiUtil.createDm(dm, memberId).then(response => dispatch(receiveDm(response)));
}


export const fetchDm = (dmId) => dispatch => {
    return DmApiUtil.fetchDm(dmId).then(response => dispatch(receiveDm(response)));
}