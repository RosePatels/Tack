import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNEL:
            debugger;
            return Object.assign({}, state, { [action.channel.id]: action.channel });
        default:
            return state;
    }
};

export default channelsReducer;