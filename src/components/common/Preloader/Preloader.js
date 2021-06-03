import s from './Preloader.module.scss';
import React from "react";

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.spinner}></div>
        </div>
    )
}

export default Preloader