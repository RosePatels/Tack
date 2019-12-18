import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component{
    componentDidMount(){
        this.props.fetchChannels();
    }

    render(){
        const { channels } = this.props;
        const channelLis = channels.map(channel => (
            <ChannelIndexItem key={channel.id} channel={channel} />
        ))
        return (
            <ul className="channel-index">
                {channelLis}
            </ul>
        )
    }

}

export default ChannelIndex;