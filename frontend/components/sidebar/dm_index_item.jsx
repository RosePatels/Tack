import React from 'react';
import { Link } from 'react-router-dom';

const DmIndexItem = ({ dm, userName }) => (
    <li className="channel-link">
        <Link to={`/client/dms/${dm.id}`}>
            <i className="fas fa-thumbtack tack-size"></i>{userName}
        </Link>
    </li>
);

export default DmIndexItem;