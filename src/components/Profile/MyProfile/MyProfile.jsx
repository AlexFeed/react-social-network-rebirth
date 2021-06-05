import s from './MyProfile.module.scss'
import Preloader from "../../common/Preloader/Preloader";
import MyProfileStatusWrap from "./MyProfileStatusWrap/MyProfileStatusWrap";
import MyProfileData from "./MyProfileData/MyProfileData";
import MyProfileDataForm from "./MyProfileDataForm/MyProfileDataForm";
import {useState} from "react";
import profileIcon from "./../../../images/defaultProfileIcon.png"

const MyProfile = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [uploadPhotoText, setUploadPhotoText] = useState('Прикрепить фото');

    if(!props.profile) return <Preloader/>

    const onSubmit = (formData) => {
        props.updateProfileData(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    const onAvaSelected = (e) => {
        if (e.target.files.length > 0) {
            setUploadPhotoText('Фото прикреплено');
            props.updatePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.MyProfile}>
                <div className={s.ava}>
                    <img
                        src={props.profile.photos.large || profileIcon}
                        alt="ava" className={s.ava__img}/> <br/>
                    {
                        props.isOwner
                        && <div className={s.app__wrapper}>
                            <input onChange={onAvaSelected} type="file" id="upload-file__input_1"
                                   className={s.upload__input} accept="image/*"/>
                            <label className={s.upload__label} htmlFor="upload-file__input_1">
                                <svg className={s.upload__icon} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                    <path
                                        d="M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z">
                                    </path>
                                </svg>
                                <span className={s.upload__text}>{uploadPhotoText}</span>
                            </label>
                        </div>
                    }
                </div>
                <MyProfileStatusWrap setGlobalError={props.setGlobalError} isOwner={props.isOwner} isFetching={props.isFetching}
                                     profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                {editMode
                    ? <MyProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <MyProfileData activateEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} isOwner={props.isOwner}/>}
            </div>
        </div>
    );
}

export default MyProfile;