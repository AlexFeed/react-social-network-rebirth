import s from './UsersElement.module.scss'
import {NavLink} from "react-router-dom";
import BlueButton from "../../common/BlueButton/BlueButton";

const UsersElement = (props) => {
    const buttonOnDisabled = props.followingInProgress.some(id => id === props.id);
    return (
        <div className={s.el}>
            <div className={s.avaContainer}>
                <NavLink className={s.ava__wrapper} to={'/profile/' + props.id}>
                    <img src={props.photoUrl} alt="user" className={s.ava}/>
                </NavLink> <br/>
                {
                    props.followed
                        ? <div className={s.followBtn}>
                            <BlueButton content={"UNFOLLOW"}
                                        disabled={buttonOnDisabled}
                                        onClick={() => props.onFollowClick(props.id, 'delete')}/>
                        </div>
                        :
                        <div className={s.followBtn}>
                            <BlueButton content={"FOLLOW"}
                                        disabled={buttonOnDisabled}
                                        onClick={() => props.onFollowClick(props.id, 'post')}/>
                        </div>
                }
            </div>
            <div className={s.usersInfo}>
                <h2 className={s.name}>{props.name}</h2>
                <p className={s.status}>
                    {props.status}
                </p>
            </div>
        </div>
    )
}

export default UsersElement