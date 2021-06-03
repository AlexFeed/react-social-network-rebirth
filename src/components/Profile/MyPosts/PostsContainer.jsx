import MyPosts from "./MyPosts";
import {addPostAC} from "../../../Redux/reducers/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost: addPostAC})(MyPosts);

export default MyPostsContainer;