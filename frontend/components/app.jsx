import React from "react";
import WelcomeContainer from './welcome/welcome_container';
import { Route } from 'react-router-dom';
import LoginPage from './login_page/login_page';
// import LoginFormContainer from './session_form/login_form_container';
import SignUpContainer from './session_form/signup_form_container';
const App = () => (
    <div>
        <Route exact path="/" component={WelcomeContainer} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpContainer} />
    </div>
);

export default App;