import s from "./Post.module.scss";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.profilePhoto} alt="ava" className={s.post__ava}/>
            <p className={s.post__msg}>{props.message}</p>
        </div>
    );
}

export default Post;