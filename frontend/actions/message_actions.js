import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";


const receiveChannelMessages = messages => {
    // debugger;
    return {
    type: RECEIVE_CHANNEL_MESSAGES,
    messages
}}


export const fetchChannelMessages = (channelId) => dispatch => {
    // debugger;
    return MessageApiUtil.fetchChannelMessages(channelId).then(messages => {
        // debugger;
        dispatch(receiveChannelMessages(messages))
    });
}