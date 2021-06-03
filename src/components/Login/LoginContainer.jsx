import React from 'react';
import {connect} from 'react-redux';
import Login from "./Login";
import {login, logout} from "../../Redux/reducers/auth-reducer";

function mapStateToProps(state) {
    return {
        loginError: state.auth.loginError,
        isAuth: state.auth.isAuth
    };
}

const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    );
};


export default connect(mapStateToProps, {login, logout})(LoginContainer);