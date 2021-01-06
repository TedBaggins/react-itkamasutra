import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = props.state.dialogsData.map( dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });
    let messagesElements = props.state.messagesData.map( message => {
        return <Message message={message.message} />
    });
    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                { dialogsElements }
            </div>
            <div className={s.dialog__messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea 
                            value={newMessageBody} 
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"
                        /></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;