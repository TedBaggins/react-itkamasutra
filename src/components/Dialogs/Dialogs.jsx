import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.dialogs__item + ' ' + s.active}>
                    John
                </div>
                <div className={s.dialogs__item}>
                    William 
                </div>
                <div className={s.dialogs__item}>
                    Mia
                </div>
                <div className={s.dialogs__item}>
                    Samuel
                </div>
                <div className={s.dialogs__item}>
                    Chloe
                </div>
                <div className={s.dialogs__item}>
                    James
                </div>
            </div>
            <div className={s.dialog__messages}>
                <div className={s.dialog__message}>Hello there!</div>
                <div className={s.dialog__message}>Your focus determines your reality.</div>
                <div className={s.dialog__message}>Do. Or do not. There is no try.</div>
                <div className={s.dialog__message}>I’ve got a bad feeling about this.</div>
                <div className={s.dialog__message}>Great, kid. Don’t get cocky.</div>
            </div>
        </div>
    )
}

export default Dialogs;