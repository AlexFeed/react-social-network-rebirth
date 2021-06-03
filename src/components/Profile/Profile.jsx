import s from "./Profile.module.scss";
import cx from 'classnames';
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={cx(s.content, s.main)}>
            <MyProfile isOwner={props.isOwner} isFetching={props.isFetching} profile={props.profile} status={props.status}
                       updateStatus={props.updateStatus} updateProfileData={props.updateProfileData}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;