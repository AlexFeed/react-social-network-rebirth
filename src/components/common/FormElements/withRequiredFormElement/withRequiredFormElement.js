import React from 'react';
import s from './withRequiredFormElement.module.scss';
import FormErrorComponent from "../ErrorComponents/FormErrorComponent";

const withRequiredFormElement = (Element, ErrorWrap) => {
    return ({input, meta, ...props}) => {
        return (
            <div className={s.MessageFormElement}>
                <Element {...props} {...input}/>
                {
                    ErrorWrap
                        ? <ErrorWrap>
                            <FormErrorComponent meta={meta}/>
                        </ErrorWrap>
                        : <FormErrorComponent meta={meta}/>
                }
            </div>
        );
    };
}

export default withRequiredFormElement;
