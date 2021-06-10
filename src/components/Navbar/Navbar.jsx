import s from "./Navbar.module.scss"
import cx from 'classnames'
import {NavLink} from "react-router-dom";
import profileIcon from "../../assets/images/defaultProfileIcon.png";
import userIcon from "../../assets/images/usersIcon.png"
import messageIcon from "../../assets/images/messageIcon.png";

const Navbar = () => {
    return (
        <nav className={cx(s.appWrapper__nav, s.nav)}>
            <NavLink activeClassName={s.active} className={s.nav__item} to='/profile'>
                <img src={profileIcon} alt="profile icon"
                     className={s.nav__img}/>
                <span className={s.nav__href}>Profile</span>
            </NavLink>
            <NavLink activeClassName={s.active} to="/dialogs" className={s.nav__item}>
                <img className={s.nav__img} src={messageIcon} alt="message icon"/>
                <span className={s.nav__href}>Messages</span>
            </NavLink>
            <NavLink activeClassName={s.active} to="/users" className={s.nav__item}>
                <img className={s.nav__img} src={userIcon}
                     alt="users icon"/>
                <span className={s.nav__href}>Users</span>
            </NavLink>
        </nav>
    );
}

export default Navbar;


