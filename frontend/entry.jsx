import React from 'react';
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
});