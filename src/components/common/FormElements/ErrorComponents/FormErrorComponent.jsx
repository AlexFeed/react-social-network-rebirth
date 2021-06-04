import React from 'react';
import s from './ErrorComponents.module.scss';

function FormErrorComponent(props) {
    let hasError = props.meta.touched && props.meta.error;

    return <div className={s.errorComponent}>
        <div className={s.error + " " + (hasError ? s.errorAnimation : "")}>{props.meta.error}</div>
    </div>;
}

export default FormErrorComponent;
