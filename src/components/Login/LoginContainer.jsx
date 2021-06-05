import {connect} from 'react-redux';
import Login from "./Login";
import {login, logout} from "../../Redux/reducers/auth-reducer";

function mapStateToProps(state) {
    return {
        loginError: state.auth.loginError,
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL,
        isLoginButtonDisabled: state.auth.isLoginButtonDisabled
    };
}


export default connect(mapStateToProps, {login, logout})(Login);