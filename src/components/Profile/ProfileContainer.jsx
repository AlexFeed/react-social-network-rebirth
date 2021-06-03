import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setStatus,
    setUserProfile,
    updatePhoto,
    updateProfileData,
    updateStatus
} from "../../Redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom"
import {compose} from "redux";
import {authSelectors} from "../../Redux/selectors/auth-selectors";

const ProfileContainer = (props) => {
    useEffect(
        () => {
            let userId = props.match.params.userId;
            if (!userId && props.isAuth === true) {
                userId = props.userId;
            } else if (!userId && props.isAuth === false) {
                props.history.push('/login');
            }
            if (userId) {
                props.setUserProfile(userId);
                props.setStatus(userId);
            }
        }, [props.match.params.userId, props.isAuth]
    )

    return <Profile updateProfileData={props.updateProfileData} updatePhoto={props.updatePhoto} isOwner={!props.match.params.userId}
                    isFetching={props.isFetching} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
}


const mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.profilePage.isFetching,
        userId: authSelectors.getUserId(state),
        isAuth: authSelectors.getIsAuth(state)
    })

export default compose(connect(mapStateToProps, {
    setUserProfile,
    setStatus,
    updateStatus,
    updatePhoto,
    updateProfileData
}), withRouter)(ProfileContainer);