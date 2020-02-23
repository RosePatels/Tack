import { RECEIVE_CHANNEL_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case RECEIVE_CHANNEL_MESSAGES:
            // debugger;
            return action.messages;
        case RECEIVE_MESSAGE:
            // debugger;
            return Object.assign({}, state, {[action.message.id]: action.message});
        default:
            return state;
    }
}

export default messagesReducer;