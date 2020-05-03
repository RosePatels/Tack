
export const fetchChannelMessages = (channelId) => {
    // debugger;
    return $.ajax({
        url: `/api/messages`,
        method: 'GET',
        data: { channel_id: channelId }
    })
}

export const fetchDmMessages = (dmId) => {
    return $.ajax({
        url: `/api/messages`,
        method: 'GET',
        data: { dm_id: dmId }
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