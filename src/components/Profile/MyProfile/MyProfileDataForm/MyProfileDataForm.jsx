import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./MyProfileDataForm.module.scss";
import BlueButton from "../../../common/BlueButton/BlueButton";
import ErrorComponent from "../../../common/FormElements/ErrorComponents/ErrorComponent";

const MyProfileDataForm = (props) => {
    return (
        <form className={s.dataWrap} onSubmit={props.handleSubmit}>
            <article className={s.formItem}>
                <label>Name: </label>
                <Field className={s.name} name={'fullName'} component={"input"} type={'text'} placeholder={'Name'}/>
            </article>
            <article className={s.formItem}>
                <label>Обо мне: </label>
                <Field className={s.aboutMe} name={'aboutMe'} component={"input"} type={'text'}
                       placeholder={'About me'}/>
            </article>
            <article className={s.formItem}>
                <label>Работа: </label>
                <Field className={s.lookingForAJob} name={'lookingForAJob'} component={"input"} type={"checkbox"}/>
            </article>
            <article className={s.formItem}>
                <label>Рабочее описание: </label>
                <Field className={s.lookingForAJobDescription} name={'lookingForAJobDescription'}
                       placeholder={"Job description"} component={"textarea"}/>
            </article>
            <br/>
            {Object.keys(props.profile.contacts).map(
                key => {
                    return (
                        <article key={key} className={s.formItem}>
                            <label className={s.contactLabel}>{key}: </label>
                            <Field name={'contacts.' + key} placeholder={key} className={s.contactItem}
                                   component={"input"} type={'text'}/>
                        </article>
                    )
                })
            }
            {props.error && <ErrorComponent error={props.error}/>}

            <div className={s.dataButton}><BlueButton>Сохранить</BlueButton></div>
        </form>
    )
}

const MyProfileContactsReduxForm = reduxForm({form: 'editProfileData'})(MyProfileDataForm);

export default MyProfileContactsReduxForm;
