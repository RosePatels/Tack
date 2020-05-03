import { RECEIVE_CHANNEL_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE, RECEIVE_DM_MESSAGES } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case RECEIVE_CHANNEL_MESSAGES:
            return action.messages;
        case RECEIVE_DM_MESSAGES:
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