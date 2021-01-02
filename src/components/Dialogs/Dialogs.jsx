import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });
    let messagesElements = props.state.messagesData.map( message => {
        return <Message message={message.message} />
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                { dialogsElements }
            </div>
            <div className={s.dialog__messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;