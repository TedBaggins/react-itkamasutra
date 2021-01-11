import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

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

    return (
        <section className={s.dialogs}>
            <div className={s.dialogs__users}>
                { dialogsElements }
            </div>
            <div className={s.dialog__messages}>
                <div className={s.dialog__box}>{ messagesElements }</div>
                <div className={s.dialog__add}>
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