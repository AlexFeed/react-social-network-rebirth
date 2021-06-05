import s from "./Post.module.scss";
import profileIcon from "./../../../../images/defaultProfileIcon.png";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={profileIcon} alt="ava" className={s.post__ava}/>
            <p className={s.post__msg}>{props.message}</p>
        </div>
    );
}

export default Post;