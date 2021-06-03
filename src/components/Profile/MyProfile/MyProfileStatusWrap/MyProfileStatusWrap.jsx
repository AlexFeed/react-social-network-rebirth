import s from "./MyProfileStatusWrap.module.scss";
import MyProfileStatus from "../MyProfileStatus/MyProfileStatus";
import React from "react";

const MyProfileStatusWrap = (props) => {
    return (
        <section className={s.info}>
            <h1 className={s.profileTitle}>My profile</h1>
            <div className={s.desc}>
                <MyProfileStatus isOwner={props.isOwner} isFetching={props.isFetching} profile={props.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}/>
            </div>
        </section>
    );
};

export default MyProfileStatusWrap;
