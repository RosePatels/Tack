import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL, REMOVE_CHANNELMEMBERSHIP, RECEIVE_CHANNELMEMBERSHIP } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNELS:
            return action.channels;
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel });
        case REMOVE_CHANNEL:
            let newState = Object.assign({}, state);
            delete newState[action.channelId];
            return newState;
        case RECEIVE_CHANNELMEMBERSHIP:
            return Object.assign({}, state, { [action.channel.id]: action.channel});
        case REMOVE_CHANNELMEMBERSHIP:
            return Object.assign({}, state, { [action.channel.id]: action.channel});
        default:
            return state;
    }
};

export default channelsReducer;