
export const fetchChannelMessages = (channelId) => {
    // debugger;
    return $.ajax({
        url: `/api/channels/${channelId}/messages`,
        method: 'GET'
    })
}