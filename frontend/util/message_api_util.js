
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

export const updateMessage = message => (
    $.ajax({
        url: `/api/messages/${message.id}`,
        method: 'PATCH',
        data: { message }
    })
);


export const deleteMessage = (messageId) => (
    $.ajax({
        url: `/api/messages/${messageId}`,
        method: 'DELETE'
    })
);