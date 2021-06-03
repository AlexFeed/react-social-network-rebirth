import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import BlueButton from "../common/BlueButton/BlueButton";
import {required} from "../../uitls/validators/validator";
import withRequiredFormElement from "../common/FormElements/withRequiredFormElement/withRequiredFormElement";
import {Redirect} from "react-router-dom";

let LoginInput = withRequiredFormElement("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.login__form}>
            <Field validate={[required]} component={LoginInput} name={"email"} placeholder="Email" type="text" className={s.login__item}/> <br/>
            <Field validate={[required]} component={LoginInput} type="password" name={"password"} placeholder="Password" className={s.login__item}/> <br/>
            <div>
                <Field component={"input"} name={"rememberMe"} id="login__checkbox" className={s.login__checkbox} type="checkbox"/> <label className={s.checkbox__label} htmlFor="login__checkbox">Remember
                me</label>
            </div> <br/>
            <div className={s.login__button}>
                <BlueButton  content="Login"/>

                {props.error ? <span className={s.loginError}>* {props.error}</span> : ''}
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData) => {props.login(formData.email, formData.password, formData.rememberMe)}
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm loginError={props.loginError} onSubmit={onSubmit}/>
        </div>
    )
};


export default Login;