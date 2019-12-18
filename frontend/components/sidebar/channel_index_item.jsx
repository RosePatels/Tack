import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIndexItem = ({ channel }) => (
    <li>
        <Link to={`/client/channels/${channel.id}`}>
            {channel.title}
        </Link>
    </li>
);

export default ChannelIndexItem;