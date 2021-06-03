import s from "./Main.module.scss";
import cx from 'classnames';
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/PostsContainer";

const Main = (props) => {
    return (
        <div className={cx(s.content, s.main)}>
            <MyProfile isFetching={props.isFetching} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Main;