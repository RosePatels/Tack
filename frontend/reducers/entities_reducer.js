import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import dmsReducer from './dms_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    dms: dmsReducer
})

export default entitiesReducer;