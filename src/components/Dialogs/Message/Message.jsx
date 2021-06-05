import s from "./Message.module.scss";
import profileIcon from "./../../../images/defaultProfileIcon.png";

const Message = (props) => {
    return (
        <div className={s.messages__item}>
            <p className={s.messages__msg}>
                {props.msg}
            </p>
            <div className={s.messages__info}>
                <img src={profileIcon} alt="profile icon" className={s.messages__img}/>
                <span className={s.messages__name}>{props.name}</span>
            </div>
        </div>
    )
}

export default Message;