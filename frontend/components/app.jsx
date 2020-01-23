import React from "react";
import WelcomeContainer from './welcome/welcome_container';
import { Route } from 'react-router-dom';
import LoginPage from './login_page/login_page';
import SignUpPage from './signup_page/signup_page';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import ClientContainer from './client/client_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <AuthRoute exact path="/" component={WelcomeContainer} />
        <AuthRoute path="/login" component={LoginPage} />
        <AuthRoute path="/signup" component={SignUpPage} />
        <ProtectedRoute path="/client" component={ClientContainer} />
    </div>
);

export default App;