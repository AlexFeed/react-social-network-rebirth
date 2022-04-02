import {getAuthData, logout} from "../../Redux/reducers/auth-reducer";
import {connect} from "react-redux";
import Header from "./Header";


const mapStateToProps = (state) => {
    let photo;
    if (state.auth.photo !== null) {
       photo = state.auth.photo;
    } else {
        photo = null
    }

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: photo
    }
}

export default connect(mapStateToProps, {getAuthData, logout})(Header);