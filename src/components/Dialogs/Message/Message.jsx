import cx from 'classnames';
import s from "./Message.module.scss";

const Message = (props) => {
    return (
        <div className={s.messages__item}>
            <p className={s.messages__msg}>
                {props.msg}
            </p>
            <div className={s.messages__info}>
                <img
                    src="data:image/png;base64,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"
                    alt="" className={cx(s.messages__img, s.dialog__img)}/>
                <span className={s.messages__name}>{props.name}</span>
            </div>
        </div>
    )
}

export default Message;