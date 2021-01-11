import styles from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={styles.dialog__message_wrap}>
            <div className={styles.dialog__message}>{props.message}</div>
        </div>
    )
}

export default Message;