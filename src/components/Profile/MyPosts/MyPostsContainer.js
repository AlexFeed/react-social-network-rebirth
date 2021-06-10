import MyPosts from "./MyPosts";
import {addPostAC} from "../../../Redux/reducers/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps = state => {
    let profilePhoto;
    profilePhoto = state.profilePage.profile ? state.profilePage.profile.photos.small : '';

    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        profilePhoto: profilePhoto
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost: addPostAC})(MyPosts);

export default MyPostsContainer;