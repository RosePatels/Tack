import React from 'react';
import InternalNavbarContainer from './internal_navbar_container';

class ChannelDetail extends React.Component {

    componentDidMount(){
        this.props.getChannel(this.props.match.params.channelId);
    }

    render(){
        const { channel } = this.props;

        return (
            <div>
                <InternalNavbarContainer channel={channel}/>
                <h2>{channel.title}</h2>
                <p>{channel.description}</p>
            </div>
        )
    }

}

export default ChannelDetail;