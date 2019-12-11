import React from "react";
import WelcomeContainer from './welcome/welcome_container';
import { Route } from 'react-router-dom';
import LoginPage from './login_page/login_page';
import SignUpPage from './signup_page/signup_page';
const App = () => (
    <div>
        <Route exact path="/" component={WelcomeContainer} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
    </div>
);

export default App;