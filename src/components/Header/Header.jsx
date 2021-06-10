import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import BlueButton from "../common/BlueButton/BlueButton";
import defaultProfileIcon from "../../assets/images/defaultProfileIcon.png";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.header__img} src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <>
                        <article className={s.absoluteColumn}>
                            <NavLink to={'/profile'} className={s.login}>{props.login}</NavLink>
                            <div className={s.logout}>
                                <BlueButton onClick={props.logout} content={'Log out'}/>
                            </div>
                        </article>
                        <NavLink to={'/profile'}>
                            <img
                                src={props.photo || defaultProfileIcon}
                                alt="ava"
                                className={s.ava__img}/>
                        </NavLink>
                    </>
                    : <NavLink className={s.redirectToLogin} activeClassName={s.active} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}


export default Header;