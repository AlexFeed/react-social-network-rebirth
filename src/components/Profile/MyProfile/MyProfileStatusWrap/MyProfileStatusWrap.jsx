import s from "./MyProfileStatusWrap.module.scss";
import MyProfileStatus from "../MyProfileStatus/MyProfileStatus";
import React from "react";

const MyProfileStatusWrap = (props) => {
    return (
        <section className={s.content}>
            <h1 className={s.profileTitle}>My profile</h1>
                <MyProfileStatus updateStatus={props.updateStatus} isOwner={props.isOwner} isFetching={props.isFetching} profile={props.profile}
                                 status={props.status}/>
        </section>
    );
};

export default MyProfileStatusWrap;
