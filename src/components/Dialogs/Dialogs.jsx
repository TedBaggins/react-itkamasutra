import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import React from "react";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( dialog => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    });
    let messagesElements = state.messagesData.map( message => {
        return <Message message={message.message} key={message.id} />
    });
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    // if (!props.isAuth) {
    //     return <Redirect to={"/login"}/>
    // }

    return (
        <section className={styles.dialogs}>
            <div className={styles.dialogs__users}>
                { dialogsElements }
            </div>
            <div className={styles.dialog__messages}>
                <div className={styles.dialog__box}>{ messagesElements }</div>
                <div className={styles.dialog__add}>
                    <div><textarea 
                            value={newMessageBody} 
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"
                        /></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;