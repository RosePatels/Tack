import React from "react";
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    constructor(props){
        super(props);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleDemoUser(){
        let demoUser = { email: 'demo@demo.com', password: '123456' };
        this.props.demoLogin(demoUser);
    }

    render () {
       return( <>
            <section className="video-background-replace-email">
                <div className="replace-email-container">
                    <div className="replace-email-content-centered">
                        <h2>Tack replaces email </h2>
                        <h2>inside your company</h2>
                        <p>Keep conversations organized in Tack, the smart alternative to email.</p>
                        <div className="slack-demo-links-container">
                            <div className="slack-demo-links">
                                <Link className="try-tack-button" to="/signup">Try Tack</Link>
                                <a className="see-the-demo-button" onClick={this.handleDemoUser}>See the Demo</a>
                            </div>
                        </div>
                        <div className="using-slack">Already using Slack? <Link className="sign-in-email" to="/login">Sign in.</Link></div>
                    </div>
                </div>
                {/* <video autoPlay muted loop>
                <source src="phone_video.mp4" type="video/mp4"></source>
                </video> */}    
            </section>
        </>);
    };
};

export default Splash;