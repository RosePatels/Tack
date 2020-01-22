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
            <section className="breakout-inbox">
                <h3>Break out of the inbox</h3>
                <h4>Working in channels gives everyone on your team a shared view of progress and purpose.</h4>
                <div className="youtube-slack-vid">
                    <iframe width="860" height="615" src="https://www.youtube.com/embed/EYqxQGmQkVw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="breakout-tiles-grid">
                    <div>
                        <p>icon</p>
                        <h5>Organized Conversations</h5>
                        <p>Instead of a single overstuffed inbox, conversations in Tack happen in dedicated spaced called channels.</p>
                    </div>
                    <div>
                        <p>icon</p>
                        <h5>Get Looped in</h5>
                        <p>Tack makes it simple to follow converstations or find important information in an easily searchable archive.</p>
                    </div>
                    <div>
                        <p>icon</p>
                        <h5>Give focus a chance</h5>
                        <p>Unlike email, Tack lets you choose which conversations are most important — and which can wait.</p>
                    </div>
                </div>
            </section>
            <section className="convince-channels">
                <div className="convince-channels-grid">
                    <div>
                        <h3>Make the Change to Channels</h3>
                        <p>Productive teamwork happens in channels - organized spaces for everything related to a project, topic, or team.</p>
                        <a>Learn more about Channels -></a>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <section className="contact-me-section">
                <h3>Contact Me</h3>
                <div className="contact-me-tiles">
                    <div className="contact-me-tile">
                        <p>img</p>
                        <h4>GitHub</h4>
                    </div>
                   <div className="contact-me-tile">
                       <p>img</p>
                       <h4>LinkedIn</h4>
                   </div>
                   <div className="contact-me-tile">
                       <p>img</p>
                       <h4>AngelList</h4>
                   </div>
                </div>
            </section>
            <section className="choose-way-to-work">
                <h3>Choose a better way to work</h3>
               <div className="slack-demo-links">
                   <Link className="try-tack-button" to="/signup">Try Tack</Link>
                   <a className="see-the-demo-button" onClick={this.handleDemoUser}>See the Demo</a>
               </div>
            </section>
        </>);
    };
};

export default Splash;