import { connect } from "react-redux";
import InternalNavbar from "./internal_navbar";

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};


// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logout())
// });

export default connect(mapStateToProps, null)(InternalNavbar);