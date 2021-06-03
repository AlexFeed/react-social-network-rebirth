import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import BlueButton from "../common/BlueButton/BlueButton";

const Header = (props) => {
    return (
        <header className='appWrapper__header header'>
            <img className={s.header__img}
                 src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="floop"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>
                        <span className={s.login}>{props.login}</span>
                        <div className={s.ava}>
                            <img
                                src={props.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlgFIAW5_WsnFNYIH3IsGVgE-M_3P-3YTGw&usqp=CAU"}
                                alt="ava"
                                className={s.ava__img}/>
                        </div>
                    <div className={s.logout}>
                        <BlueButton onClick={props.logout} content={'Log out'}/>
                    </div>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}


export default Header;