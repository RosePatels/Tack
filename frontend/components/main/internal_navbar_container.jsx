import { connect } from "react-redux";
import InternalNavbar from "./internal_navbar";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        channel: ownProps.channel
    };
};


// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logout())
// });

export default connect(mapStateToProps, null)(InternalNavbar);