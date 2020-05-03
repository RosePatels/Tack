import { connect } from "react-redux";
import DmNavbar from './dm_navbar';

const mapStateToProps = (state, ownProps) => {
    return {
        userName: ownProps.userName
    }
}

// const mapDispatchToProps = null;

export default connect(mapStateToProps, null)(DmNavbar);