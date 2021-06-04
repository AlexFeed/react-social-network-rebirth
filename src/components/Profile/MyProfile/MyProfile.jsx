import s from './MyProfile.module.scss'
import Preloader from "../../common/Preloader/Preloader";
import MyProfileStatusWrap from "./MyProfileStatusWrap/MyProfileStatusWrap";
import MyProfileData from "./MyProfileData/MyProfileData";
import MyProfileDataForm from "./MyProfileDataForm/MyProfileDataForm";
import {useState} from "react";

const MyProfile = (props) => {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        props.updateProfileData(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.MyProfile}>
                <div className={s.ava}><img
                    src={props.profile.photos.large || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlgFIAW5_WsnFNYIH3IsGVgE-M_3P-3YTGw&usqp=CAU"}
                    alt="ava" className={s.ava__img}/></div>
                <MyProfileStatusWrap isFetching={props.isFetching} profile={props.profile} status={props.status}
                                     updateStatus={props.updateStatus}/>
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