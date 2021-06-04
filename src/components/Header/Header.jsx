import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import BlueButton from "../common/BlueButton/BlueButton";

const Header = (props) => {
    return (
        <header className='appWrapper__header header'>
            <img className={s.header__img}
                 src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="floop"/>
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
                                src={props.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlgFIAW5_WsnFNYIH3IsGVgE-M_3P-3YTGw&usqp=CAU"}
                                alt="ava"
                                className={s.ava__img}/>
                        </NavLink>
                    </>
                    : <NavLink className={s.redirectToLogin} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}


export default Header;