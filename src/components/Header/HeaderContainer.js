import {getAuthData, logout} from "../../Redux/reducers/auth-reducer";
import {connect} from "react-redux";
import Header from "./Header";


const mapStateToProps = (state) => {
    let photo;
    if( state.profilePage.profile) {
        photo = state.profilePage.profile.photos.small;
    }
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: photo || state.auth.photo
    }
}

export default connect(mapStateToProps, {getAuthData, logout})(Header);