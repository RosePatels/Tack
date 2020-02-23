import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";


const receiveChannelMessages = messages => {
    // debugger;
    return {
    type: RECEIVE_CHANNEL_MESSAGES,
    messages
}}

const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}


export const fetchChannelMessages = (channelId) => dispatch => {
    // debugger;
    return MessageApiUtil.fetchChannelMessages(channelId).then(messages => {
        // debugger;
        dispatch(receiveChannelMessages(messages))
    });
}

export const fetchMessage = (messageId) => dispatch => {
    return MessageApiUtil.fetchMessage(messageId).then(message => {
        dispatch(receiveMessage(message))
    });
}