import s from './MyProfile.module.scss'
import Preloader from "../../common/Preloader/Preloader";
import MyProfileStatusWrap from "./MyProfileStatusWrap/MyProfileStatusWrap";

const MyProfile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.MyProfile}>
                <div className={s.ava}><img
                    src={props.profile.photos.large || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlgFIAW5_WsnFNYIH3IsGVgE-M_3P-3YTGw&usqp=CAU"}
                    alt="ava" className={s.ava__img}/></div>
                <MyProfileStatusWrap isFetching={props.isFetching} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default MyProfile