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
import {setGlobalError} from "../../Redux/reducers/app-reducer";

const ProfileContainer = ({match, isAuth, userId, history, setUserProfile, setStatus, setGlobalError, updateProfileData,
                              updatePhoto, isFetching, profile, status, updateStatus, isProfileFetching}) => {
    useEffect(
        () => {
            let innerUserId = match.params.userId;
            if (!innerUserId && isAuth === true) {
                innerUserId = userId;
            } else if (!innerUserId && isAuth === false) {
                history.push('/login');
            }
            if (innerUserId) {
                setUserProfile(innerUserId);
                setStatus(innerUserId);
            }
        }, [match.params.userId, isAuth, userId, history, setStatus, setUserProfile]
    )

    return <Profile setGlobalError={setGlobalError} updateProfileData={updateProfileData} updatePhoto={updatePhoto}
                    isOwner={!match.params.userId} isFetching={isFetching} profile={profile} status={status}
                    updateStatus={updateStatus} isProfileFetching={isProfileFetching}/>
}


const mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isFetching: state.profilePage.isFetching,
        isProfileFetching: state.profilePage.isProfileFetching,
        userId: authSelectors.getUserId(state),
        isAuth: authSelectors.getIsAuth(state)
    })

export default compose(connect(mapStateToProps, {
    setUserProfile,
    setStatus,
    updateStatus,
    updatePhoto,
    updateProfileData,
    setGlobalError
}), withRouter)(ProfileContainer);