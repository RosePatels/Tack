import React from 'react';
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from './actions/session_actions';
import { createChannel, fetchChannel, updateChannel, fetchChannels } from './actions/channel_actions';
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

    window.createChannel = createChannel;
    window.fetchChannel = fetchChannel;
    window.updateChannel = updateChannel;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchChannels = fetchChannels;

    ReactDOM.render(<Root store={store} />, root);
});