import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.dialog__add}>
                <div>
                    <Field component={Textarea}
                           name={"newMessageField"}
                           placeholder={"Enter your message"}
                           validate={[requiredField, maxLength50]}/>
                </div>
                <div><button>Send</button></div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( dialog => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    });
    let messagesElements = state.messagesData.map( message => {
        return <Message message={message.message} key={message.id} />
    });
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageField);
    }

    return (
        <section className={styles.dialogs}>
            <div className={styles.dialogs__users}>
                { dialogsElements }
            </div>
            <div className={styles.dialog__messages}>
                <div className={styles.dialog__box}>{ messagesElements }</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </section>
    )
}

export default Dialogs;