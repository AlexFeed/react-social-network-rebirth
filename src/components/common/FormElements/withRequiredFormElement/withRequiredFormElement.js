import React from 'react';
import s from './withRequiredFormElement.module.scss';
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const withRequiredFormElement = (Element, ErrorWrap) => {
    return ({input, meta, ...props}) => {
        return (
            <div className={s.MessageFormElement}>
                <Element {...props} {...input}/>
                {
                    ErrorWrap
                        ? <ErrorWrap>
                            <ErrorComponent meta={meta}/>
                        </ErrorWrap>
                        : <ErrorComponent meta={meta}/>
                }
            </div>
        );
    };
}

export default withRequiredFormElement;
