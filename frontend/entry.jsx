import React from 'react';
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from './actions/session_actions';
import { createChannel, fetchChannel, updateChannel, deleteChannel, fetchChannels, createChannelMembership, deleteChannelMembership } from './actions/channel_actions';
import { fetchUsers } from './actions/user_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    let preloadedState = undefined;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;

    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
    }

    const store = configureStore(preloadedState);
    delete window.currentUser;

    window.fetchUsers = fetchUsers;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchChannels = fetchChannels;
    window.createChannelMembership = createChannelMembership;
    window.deleteChannelMembership = deleteChannelMembership;

    ReactDOM.render(<Root store={store} />, root);
});