
export const createDm = (dm, member_id) => {
    
    return $.ajax({
        url: '/api/dms',
        method: 'POST',
        data: { dm: dm, user_id: member_id }
    })
};