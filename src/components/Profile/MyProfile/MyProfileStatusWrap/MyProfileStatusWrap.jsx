import s from "./MyProfileStatusWrap.module.scss";
import MyProfileStatus from "../MyProfileStatus/MyProfileStatus";
import React from "react";

const MyProfileStatusWrap = (props) => {
    return (
        <section className={s.content}>
            <h1 className={s.profileTitle}>{props.isOwner ? 'My profile' : 'User Profile'}</h1>
                <MyProfileStatus updateStatus={props.updateStatus} isOwner={props.isOwner} isFetching={props.isFetching} profile={props.profile}
                                 setGlobalError={props.setGlobalError} status={props.status}/>
        </section>
    );
};

export default MyProfileStatusWrap;
