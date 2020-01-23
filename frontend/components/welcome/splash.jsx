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
                        <div className="using-slack">Already using Tack? <Link className="sign-in-email" to="/login">Sign in.</Link></div>
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
                    {/* <iframe width="860" height="615" src="https://www.youtube.com/embed/EYqxQGmQkVw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div>
                <div className="breakout-tiles-grid">
                    <div className="breakout-tile">
                        <i className="far fa-sticky-note"></i>
                        <h5>Organized Conversations</h5>
                        <p>Instead of a single overstuffed inbox, conversations in Tack happen in dedicated spaced called channels.</p>
                    </div>
                    <div className="breakout-tile">
                        <i className="fas fa-infinity"></i>
                        <h5>Get Looped in</h5>
                        <p>Tack makes it simple to follow converstations or find important information in an easily searchable archive.</p>
                    </div>
                    <div className="breakout-tile">
                       <i className="far fa-hand-pointer"></i>
                        <h5>Give focus a chance</h5>
                        <p>Unlike email, Tack lets you choose which conversations are most important — and which can wait.</p>
                    </div>
                </div>
            </section>
            <section className="convince-channels">
                <div className="convince-channels-grid">
                    <div className="change-to-channels">
                        <h3>Make the Change to Channels</h3>
                        <p>Productive teamwork happens in channels - organized spaces for everything related to a project, topic, or team.</p>
                       <a href="#" className="learn-channels">Learn more about Channels <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <section className="contact-me-section">
                <h3>Contact Me</h3>
                <div className="contact-me-tiles">
                    <div className="contact-me-tile">
                       <a href="https://github.com/ShreePatel95" target="_blank">
                            <div className="github-icon-container"><i className="fab fa-github"></i></div>
                            <h4>GitHub</h4>
                        </a>
                    </div>
                   <div className="contact-me-tile">
                       <a href="https://www.linkedin.com/in/shree1795/" target="_blank">
                            <div className="linkedin-icon-container"><i className="fab fa-linkedin-in"></i></div>
                            <h4>LinkedIn</h4>
                       </a>
                   </div>
                   <div className="contact-me-tile">
                       <a href="https://angel.co/shree-patel" target="_blank">
                            <div className="angellist-icon-container"><i className="fab fa-angellist"></i></div>
                            <h4>Angel List</h4>
                       </a>
                   </div>
                </div>
            </section>
            <section className="choose-way-to-work">
                <h3>Choose a better way to work</h3>
               <div className="tack-try-links">
                   <Link className="try-tack-white-button" to="/signup">Try Tack</Link>
                   <a className="see-the-demo-white-button" onClick={this.handleDemoUser}>See the Demo</a>
               </div>
            </section>
            <footer>
               <i className="fas fa-thumbtack"></i>
               <p>Built in 2020. Tack is a clone of <a href="https://slack.com/">Slack</a></p>
            </footer>
        </>);
    };
};

export default Splash;