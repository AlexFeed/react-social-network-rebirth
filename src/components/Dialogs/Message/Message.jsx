import s from "./Message.module.scss";
import profileIcon from "../../../assets/images/defaultProfileIcon.png";

const Message = (props) => {
    return (
        <article className={`${s.messages__item} ${props.fromOwner ? s.messages__fromOwner : ''}`}>
            <p className={s.messages__msg}>
                {props.msg}
            </p>
            <img src={props.fromOwner ? props.avaUrl : profileIcon} alt="profile icon" className={s.messages__img}/>
        </article>
    )
}

export default Message;