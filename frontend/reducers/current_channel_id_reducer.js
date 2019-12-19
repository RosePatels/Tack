import { OPEN_MODAL } from '../actions/modal_actions';

const currentChannelIdReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            debugger;
            return action.channelId;
        default:
            return state;
    }
}

export default currentChannelIdReducer;