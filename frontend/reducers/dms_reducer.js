import { RECEIVE_DM } from '../actions/dm_actions';

const dmsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_DM:
            return Object.assign({}, state, { [action.dm.id]: action.dm });
        default:
            return state;
    }
}

export default dmsReducer;