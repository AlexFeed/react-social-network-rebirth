import s from "./Users.module.scss";
import UsersElement from "./UsersElement/UsersElement";
import Preloader from "../common/Preloader/Preloader";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import defaultUserIcon from "../common/images/defaultProfileIcon.png"

const Users = (props) => {
    return (
        <>
            <h1 className={s.title}>Users</h1>
            {
                props.usersData.map(u => {
                    return (
                            <UsersElement followingInProgress={props.followingInProgress} onFollowClick={props.onFollowClick} id={u.id} key={u.id} name={u.name}
                                          status={u.status} photoUrl={u.photos.small || defaultUserIcon} followed={u.followed}/>
                    )
                })
            }
            {props.isFetching ? <Preloader/> : ''}
            <Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
        </>
    )
}

export default Users