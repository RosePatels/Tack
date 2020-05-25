import React from 'react';
import DmIndexItem from './dm_index_item';

class DmIndex extends React.Component {

    componentDidMount(){
        this.props.fetchDms();
    }

    render(){
        let { dms, users, currentUserId } = this.props;

        if(!dms){
            return null;
        }

        let dmIds = users[currentUserId].dmIds;
        if (!dmIds) {
            return null;
        }
        let dmLis = Object.values(dms).map(dm => {
            let memberOne = dm.memberIds[0];
            let memberTwo = dm.memberIds[1];
            let userName;
            if (memberOne !== currentUserId && users[memberOne]){
                userName = users[memberOne].name
            } else if (memberTwo !== currentUserId && users[memberTwo]) {
                userName = users[memberTwo].name;
            } else {
                userName = users[currentUserId].name;
            }
            return <DmIndexItem key={dm.id} dm={dm} userName={userName} />
        });

        return (
            <ul className="channel-index">
                {dmLis}
            </ul>
        )
    }
}

export default DmIndex;