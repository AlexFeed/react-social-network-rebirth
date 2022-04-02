import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import BlueButton from "../common/BlueButton/BlueButton";
import {required} from "../../uitls/validators/validator";
import withRequiredFormElement from "../common/FormElements/withRequiredFormElement/withRequiredFormElement";
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import cn from "classnames";
import ErrorComponent from "../common/FormElements/ErrorComponents/ErrorComponent";

const ErrorWrap = styled.div`
  max-width: 400px;
`;

const LoginInput = withRequiredFormElement("input", ErrorWrap);
const initialFormValues = {
    email: 'alexdevelopfrontend@gmail.com',
    password: 'h%uyNp9NhXi7%P'
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field defaultValue={'alexdevelopfrontend@gmail.com'} validate={[required]}
                   component={LoginInput} name={"email"}
                   placeholder="Email" type="text"
                   className={s.login__item}/>
            <Field validate={[required]}
                   defaultValue={'h%uyNp9NhXi7%P'}
                   component={LoginInput} type="password"
                   name={"password"} placeholder="Password"
                   className={s.login__item}/>
            <Field component={"input"}
                   name={"rememberMe"} id="login__checkbox"
                   className={s.login__checkbox}
                   type="checkbox"/>
            <label className={s.checkbox__label} htmlFor="login__checkbox">Remember me</label>
            {props.captchaURL
                ? <article className={s.captchaWrap}>
                    <img src={props.captchaURL} alt="captcha"/> <br/>
                    <Field placeholder={'Введите символы с картинки'} validate={[required]} component={LoginInput}
                           name={"captcha"}
                           className={cn(s.login__item, s.login__captcha)} type="text"/>
                </article>
                : ''}
            <div className={s.login__button}>
                <BlueButton disabled={props.isLoginButtonDisabled}>Login</BlueButton>
            </div>
            {props.error && <ErrorWrap><ErrorComponent error={props.error}/></ErrorWrap>}
        </form>
    )
};

const LoginReduxForm = reduxForm(
    {
        form: 'login',
    }
)(LoginForm);

const Login = (props) => {
        if (props.isAuth) {
            return <Redirect to={"/profile"}/>
        }

        const onSubmit = (formData) => {
            props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        }

        return (
            <div className={s.login}>
                <h1>Login</h1>
                <LoginReduxForm initialValues={initialFormValues} isLoginButtonDisabled={props.isLoginButtonDisabled} captchaURL={props.captchaURL}
                                loginError={props.loginError} onSubmit={onSubmit}/>
            </div>
        )
    }
;


export default Login;