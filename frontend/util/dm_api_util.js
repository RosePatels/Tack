
export const fetchDms = () => {
    return $.ajax({
        url: '/api/dms',
        method: 'GET'
    })
}

export const createDm = (dm, member_id) => {
    
    return $.ajax({
        url: '/api/dms',
        method: 'POST',
        data: { dm: dm, user_id: member_id }
    })
};

export const fetchDm = (dmId) => {
    return $.ajax({
        url: `/api/dms/${dmId}`,
        method: 'GET'
    })
}