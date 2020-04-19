
export const fetchChannelMessages = (channelId) => {
    // debugger;
    return $.ajax({
        url: `/api/channels/${channelId}/messages`,
        method: 'GET'
    })
}

export const fetchMessage = messageId => (
    $.ajax({
        url: `/api/messages/${messageId}`,
        method: 'GET'
    })
);

export const deleteMessage = (channelId, messageId) => (
    $.ajax({
        url: `/api/channels/${channelId}/messages/${messageId}`,
        method: 'DELETE'
    })
);