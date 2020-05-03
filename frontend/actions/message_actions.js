import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_DM_MESSAGES = "RECEIVE_DM_MESSAGES";

const receiveChannelMessages = messages => {
    // debugger;
    return {
    type: RECEIVE_CHANNEL_MESSAGES,
    messages
}}

const receiveDmMessages = messages => {
    return {
        type: RECEIVE_DM_MESSAGES,
        messages
    }
}


const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

const removeMessage = messageId => ({
    type: REMOVE_MESSAGE,
    messageId: messageId
});


export const fetchChannelMessages = (channelId) => dispatch => {
    // debugger;
    return MessageApiUtil.fetchChannelMessages(channelId).then(messages => {
        // debugger;
        dispatch(receiveChannelMessages(messages))
    });
}

export const fetchDmMessages = (dmId) => dispatch => {
    return MessageApiUtil.fetchDmMessages(dmId).then(messages => {
        dispatch(receiveChannelMessages(messages))
    });
}

export const fetchMessage = (messageId) => dispatch => {
    return MessageApiUtil.fetchMessage(messageId).then(message => {
        dispatch(receiveMessage(message))
    });
}

export const updateMessage = message => dispatch => {
    return MessageApiUtil.updateMessage(message).then(message => dispatch(receiveMessage(message)));
}

export const deleteMessageFromChannel = (messageId) => dispatch => {
    return MessageApiUtil.deleteMessage(messageId).then(() => {
        dispatch(removeMessage(messageId))
    })
}