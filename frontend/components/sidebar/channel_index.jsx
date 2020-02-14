import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component{
    componentDidMount(){
        this.props.fetchChannels();
    }

    render(){
        let { channels, users, currentUserId } = this.props;
     
        let channelIds = users[currentUserId].channelIds;
        if(!channelIds){
            return null;
        }
        let channelLis = Object.values(channels).map(channel => {
            if (channelIds.includes(channel.id)){
                return <ChannelIndexItem key={channel.id} channel={channel} />
            }
        })
        return (
            <ul className="channel-index">
                {channelLis}
            </ul>
        )
    }

}

export default ChannelIndex;