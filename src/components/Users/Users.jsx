import s from "./Users.module.scss";
import UsersElement from "./UsersElement/UsersElement";
import Preloader from "../common/Preloader/Preloader";
import React from "react";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    return (
        <div>
            <h1 className={s.title}>Users</h1>
            {
                props.usersData.map(u => {
                    return (
                        <div>
                            <UsersElement followingInProgress={props.followingInProgress} onFollowClick={props.onFollowClick} id={u.id} key={u.userId} name={u.name}
                                          status={u.status} photoUrl={u.photos.small || 'https://image.flaticon.com/icons/png/128/892/892781.png'} followed={u.followed}/>
                        </div>
                    )
                })
            }
            {props.isFetching ? <Preloader/> : ''}
            <Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
        </div>
    )
}

export default Users