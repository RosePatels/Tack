import React from 'react';
import InternalNavbarContainer from './internal_navbar_container';
import { Switch, Route } from 'react-router-dom';
import Thread from './thread';
import { ProtectedRoute } from '../../util/route_utils';
import ChannelDetailContainer from '../main/channel_detail_container';
import DmDetailContainer from '../main/dm_detail_container';

class Main extends React.Component {
    render() {
        
        return (
            <div className="main-container">
                <section>
                    <Switch>
                        <ProtectedRoute exact path="/client/threads" component={Thread}/>
                        <ProtectedRoute path="/client/channels/:channelId" component={ChannelDetailContainer}/>
                        <ProtectedRoute path="/client/dms/:dmId" component={DmDetailContainer} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default Main;