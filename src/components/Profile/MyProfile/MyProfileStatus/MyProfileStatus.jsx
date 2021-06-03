import s from "./MyProfileStatus.module.scss";
import React, {useEffect, useState} from "react";
import Preloader from "../../../common/Preloader/Preloader";

const MyProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
        if (status !== props.status) setStatus(props.status);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        if (status.length > 300) {
            alert('Сообщение не должно превышать 300 символов!');
            setStatus(true);
        } else if (status === '') {
            alert('Вы должны что-то ввести, прежде чем отправлять статус!');
            setStatus(true);
        } else {
            props.updateStatus(status);
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={s.info}>
            <h1 className={s.name}>{props.profile.fullName}</h1>
            <div className={s.desc}>
                {
                    props.isFetching ? <Preloader/> : editMode
                        ? <>
                            <label htmlFor="aboutMe">Статус:</label> <input id="aboutMe"
                                                                            value={status}
                                                                            onChange={onStatusChange}
                                                                            autoFocus={true}
                                                                            onBlur={deactivateEditMode}
                                                                            className={s.statusInput} type="text"/>
                        </>

                        : <p onClick={activateEditMode} className={s.status}>Статус: {props.status}</p>}

                {props.profile.aboutMe ? <p>Обо мне: {props.profile.aboutMe}</p> : ''}
                <span
                    className={s.job}>Работа: {props.profile.lookingForAJob ? 'в поиске' : 'не интересуюсь'}
                    </span>
                <br/>
                {props.profile.lookingForAJobDescription
                    ? <p className={s.jobDesc}>Рабочее описание: {props.profile.lookingForAJobDescription} </p>
                    : ''}
            </div>
        </div>
    )
};

export default MyProfileStatus;
