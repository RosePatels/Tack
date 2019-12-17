import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

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

export const fetchChannel = (channelId) => dispatch => {
    return ChannelApiUtil.fetchChannel(channelId).then(channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveErrors(err.responseJSON))
    );
}

export const fetchChannels = () => dispatch => {
    debugger;
   return ChannelApiUtil.fetchChannels().then(channels => {
       debugger;
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