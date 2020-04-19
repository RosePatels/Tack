import { RECEIVE_CHANNEL_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';

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
        case REMOVE_MESSAGE:
            let newState = Object.assign({}, state);
            delete newState[action.messageId];
            return newState;
        default:
            return state;
    }
}

export default messagesReducer;