import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CHANNEL, RECEIVE_CHANNELMEMBERSHIP, REMOVE_CHANNELMEMBERSHIP } from '../actions/channel_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case RECEIVE_CHANNELMEMBERSHIP:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case REMOVE_CHANNELMEMBERSHIP:
            return Object.assign({}, state, {[action.user.id]: action.user});
        default:
            return state;
    }
};

export default usersReducer;