import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = ({ channel }) => (
    <li className="channel-link">
        <Link to={`/client/channels/${channel.id}`}>
            <i className="fas fa-hashtag"></i>{channel.title}
        </Link>
    </li>
);

export default ChannelIndexItem;