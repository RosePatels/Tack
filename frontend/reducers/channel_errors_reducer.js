import { RECEIVE_CHANNEL_ERRORS, RECEIVE_CHANNEL } from '../actions/channel_actions';

const channelErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNEL_ERRORS:
            debugger;
            return action.errors
        case RECEIVE_CHANNEL:
                return [];
        default:
            return state;
    }
}

export default channelErrorsReducer;