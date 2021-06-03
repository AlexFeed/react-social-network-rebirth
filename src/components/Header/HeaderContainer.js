import React from "react";
import {getAuthData, logout} from "../../Redux/reducers/auth-reducer";
import {connect} from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}

export default connect(mapStateToProps, {getAuthData, logout})(HeaderContainer)