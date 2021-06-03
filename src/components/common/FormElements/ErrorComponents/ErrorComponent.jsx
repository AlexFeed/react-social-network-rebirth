import React from 'react';
import s from './ErrorComponents.module.scss';
import cn from "classnames";

function ErrorComponent(props) {
    return <div className={s.errorComponent}>
        <div className={cn(s.error, s.errorAnimation, s.withOutTriangle)}>{props.error}</div>
    </div>;
}

export default ErrorComponent;
