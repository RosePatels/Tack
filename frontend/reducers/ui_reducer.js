import { combineReducers } from 'redux';
import modal from './modal_reducer';
import currentChannelId from './current_channel_id_reducer';

export default combineReducers({
    modal,
    currentChannelId
});