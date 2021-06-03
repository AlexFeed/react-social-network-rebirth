import s from "./MyProfileData.module.scss";
import React from "react";
import BlueButton from "../../../common/BlueButton/BlueButton";

const MyProfileData = (props) => {
    return (
        <section className={s.dataWrap}>
            <h1 className={s.name}>{props.profile.fullName}</h1>
            <div className={s.desc}>
                <article className={s.profileDataItem}>
                    <em className={s.profileDataAbout}>Обо мне: </em>
                    {props.profile.aboutMe ? props.profile.aboutMe : ' no information'}</article>
                <article className={s.profileDataItem}>
                    <em className={s.profileDataAbout}>Поиск работы: </em>
                    {props.profile.lookingForAJob ? 'заинтересован' : 'не заинтересован'}</article>
                <article className={s.profileDataItem}>
                    <em className={s.profileDataAbout}>Рабочее описание: </em>
                    {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : ' no information'}
                </article>
                <br/>
                {Object.keys(props.profile.contacts).map(
                    key => {
                        return <span key={key}><Contact key={key} contactTitle={key}
                                                        contactValue={props.profile.contacts[key]}/></span>
                    }
                )}

                {props.isOwner ? <div className={s.dataButton}><BlueButton onClick={() => props.activateEditMode(true)}>Редактировать</BlueButton></div> : ''}
            </div>
        </section>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return <article className={s.contact}><em className={s.contactTitle}>{contactTitle + ': '}</em>{contactValue ?
        <a className={s.profileHref} href={contactValue}>{contactValue}</a> : 'no information'}</article>
}

export default MyProfileData;
