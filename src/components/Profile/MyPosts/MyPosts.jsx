import React from 'react';
import s from "./MyPosts.module.scss";
import Post from "./Posts/Post";
import BlueButton from "../../common/BlueButton/BlueButton";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../uitls/validators/validator";
import withRequiredFormElement from "../../common/FormElements/withRequiredFormElement/withRequiredFormElement";
import sc from "styled-components";
import defaultProfileIcon from "./../../../assets/images/defaultProfileIcon.png";


const ErrorStyles = sc.div`
  margin-right: 45%;
  float: right;
`;

let RequiredTextArea = withRequiredFormElement("textarea", ErrorStyles);

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.newPost__form}>
            <Field component={RequiredTextArea} name='newPostText' validate={[required]} className={s.newPost__textarea}
                   placeholder='your news'/>
            <div className={s.button}>
                <BlueButton content="Отправить"/>
            </div>
        </form>
    );
};

const MyPostsReduxForm = reduxForm({
    form: 'myPosts'
})(MyPostsForm)

const MyPosts = React.memo(props => {
    const posts = props.postsData.map(p => <Post  profilePhoto={props.profilePhoto || defaultProfileIcon}  message={p.message} key={p.id}
                                                 likes={p.likes}/>)
    const addNewPost = (formData) => {
        props.addPost(formData.newPostText);
        formData.newPostText = '';
    };

    return (
        <div className={s.postsContainer}>
                <h2 className={s.myPosts__title}>{props.isOwner ? 'My posts' : 'Posts'}</h2>
                {props.isOwner ? <MyPostsReduxForm onSubmit={addNewPost}/> : ''}
                {posts}
        </div>
    );
});


export default MyPosts;