import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";
import defaultProfileIcon from "../../common/images/defaultProfileIcon.png"

const DialogItem = (props) => {
    return (
        <NavLink activeClassName={s.active} to={"/dialogs/" + props.id} className={s.dialogItem}>
            <img
                src={defaultProfileIcon}
                alt="ava" className={s.dialogItem__img}/>
            <span className={s.dialogItem__name}>{props.name}</span>
        </NavLink>
    )
}

export default DialogItem;