import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const RECEIVE_CHANNELMEMBERSHIP = "RECEIVE_CHANNELMEMBERSHIP";
export const REMOVE_CHANNELMEMBERSHIP = "REMOVE_CHANNELMEMBERSHIP";

const receiveChannel = ({channel, user}) => {
    return {
    type: RECEIVE_CHANNEL,
    channel,
    user
}};

const receiveChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
});

const receiveErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});


const addMember = channelMembership => {
    debugger;
    const { channel, user } = channelMembership;
    return {
    type: RECEIVE_CHANNELMEMBERSHIP,
    channel,
    user
}};

const deleteMember = channelMembership => {
    debugger;
    const { channel, user } = channelMembership;
    return {
    type: REMOVE_CHANNELMEMBERSHIP,
    channel,
    user
}};

//do i need all the channel memberships for a channel so I can display the users - or am I overthinking this for now?


export const fetchChannel = (channelId) => dispatch => {
    return ChannelApiUtil.fetchChannel(channelId).then(channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveErrors(err.responseJSON))
    );
}

export const fetchChannels = () => dispatch => {
   return ChannelApiUtil.fetchChannels().then(channels => {
        dispatch(receiveChannels(channels))
   })
};

export const createChannel = channel => dispatch => {
    return ChannelApiUtil.createChannel(channel).then(response => {
        dispatch(receiveChannel(response))},
    err => dispatch(receiveErrors(err.responseJSON)));
}

export const updateChannel = channel => dispatch => {
    return ChannelApiUtil.updateChannel(channel).then(channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveErrors(err.responseJSON)));
}

export const createChannelMembership = (channelId, memberId) => dispatch => {
    return ChannelApiUtil.addMemberToChannel(channelId, memberId).then(channelMembership => {
        debugger;
        dispatch(addMember(channelMembership))
    });
}

export const deleteChannelMembership = (channelId, memberId) => dispatch => {
    return ChannelApiUtil.deleteMemberFromChannel(channelId, memberId).then(response => {
        debugger;
        dispatch(deleteMember(response))
    });
}