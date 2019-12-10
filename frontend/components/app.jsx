import React from "react";
import WelcomeContainer from './welcome/welcome_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpContainer from './session_form/signup_form_container';
const App = () => (
    <div>
        <h1>This is Tack</h1>
        <WelcomeContainer />

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignUpContainer} />
    </div>
);

export default App;