import { RECEIVE_CHANNEL_MESSAGES } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case RECEIVE_CHANNEL_MESSAGES:
            // debugger;
            return action.messages;
        default:
            return state;
    }
}

export default messagesReducer;