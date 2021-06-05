import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    return (
        <>
            {props.isProfileFetching
                ? <Preloader/>
                : <MyProfile setGlobalError={props.setGlobalError} updatePhoto={props.updatePhoto} isOwner={props.isOwner}
                             isFetching={props.isFetching}
                             profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                             updateProfileData={props.updateProfileData}/>}
            <MyPostsContainer  isOwner={props.isOwner}/>
        </>
    );
}

export default Profile;