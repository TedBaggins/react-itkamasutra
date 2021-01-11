import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.css';
import user_default_photo from '../../../images/user_default.png';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogs__user}>
            <img src={user_default_photo}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;