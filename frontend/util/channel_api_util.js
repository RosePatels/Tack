export const fetchChannels = () => {
    return $.ajax({
        url: '/api/channels',
        method: 'GET'
    })
}

export const createChannel = channel => (
    $.ajax({
        url: '/api/channels',
        method: 'POST',
        data: { channel }
    })
);

export const fetchChannel = channelId => (
    $.ajax({
        url: `/api/channels/${channelId}`,
        method: 'GET'
    })
);

export const updateChannel = channel => (
    $.ajax({
        url: `/api/channels/${channel.id}`,
        method: 'PATCH',
        data: { channel }
    })
);

export const addMemberToChannel = (channelId, memberId) => (
    $.ajax({ 
        url: `/api/channels/${channelId}/add_member`,
        method: 'POST',
        data: { user_id: memberId }
    })
);

export const deleteMemberFromChannel = (channelId, memberId) => (
    $.ajax({ 
        url: `/api/channels/${channelId}/remove_member`, 
        method: 'DELETE', 
        data: { user_id: memberId } 
    })
);