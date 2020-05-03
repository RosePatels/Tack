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

        let dmLis = Object.values(dms).map(dm => {
            let memberOne = dm.memberIds[0];
            let memberTwo = dm.memberIds[1];
            let userName = users[memberTwo].name;
            if (memberOne !== currentUserId && users[memberOne]){
                userName = users[memberOne].name
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