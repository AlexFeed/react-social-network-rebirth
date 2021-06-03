import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import BlueButton from "../common/BlueButton/BlueButton";
import {Field, reduxForm} from "redux-form";
import {required} from "../../uitls/validators/validator";
import withRequiredFormElement from "../common/FormElements/withRequiredFormElement/withRequiredFormElement";
import sc from "styled-components";

const ErrorStyles = sc.div`
  margin-right: 45%;
  float: right;
`;
let RequiredTextArea = withRequiredFormElement("textarea", ErrorStyles);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.newPost__form}>
            <Field name='newDialogText' validate={[required]} component={RequiredTextArea}
                   className={s.newPost__textarea} placeholder='your message' name="newDialogText"/>
            <div className={s.button}>
                <BlueButton content='Send message'/>
            </div>
        </form>
    );
};

const DialogsReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(component => <DialogItem name={component.name} key={component.id}
                                                                         id={component.id}/>);
    let messagesElements = props.messages.map((msg) => <Message msg={msg.message}/>);

    const addMessage = (formData) => {
        props.addMessage(formData.newDialogText)
    }


    return (
        <div className={s.dialogs}>
            <h1 className={s.title}>DIALOGS</h1> <br/>
            <div className={s.dialogList}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className="messages">
                    {messagesElements}
                    <DialogsReduxForm RequiredTextArea={RequiredTextArea} onSubmit={addMessage}/>
                </div>
            </div>
        </div>
    )
};


export default Dialogs;