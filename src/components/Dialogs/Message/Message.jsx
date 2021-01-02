import s from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.dialog__message_wrap}>
            <div className={s.dialog__message}>{props.message}</div>
        </div>
    )
}

export default Message;