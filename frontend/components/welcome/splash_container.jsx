import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

// const mapStateToProps = ({ errors }) => {
//     return {
//         formType: 'Sign Up',
//         errors: Object.values(errors.session)
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        demoLogin: (user) => dispatch(login(user))
    };
};

export default connect(null, mapDispatchToProps)(Splash);