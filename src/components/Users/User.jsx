import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../images/user_default.png';
import {NavLink} from 'react-router-dom';

const User = (props) => {

    return (
            <div className={styles.users__item}>
                <div className={styles.users__box_photo_name}>
                    <div className={styles.users__photo}>
                        <NavLink to={'/profile/' + props.user.id}>
                            <img className={styles.userPhoto} src={ props.user.photos.small != null ? props.user.photos.small : userPhoto}></img>
                        </NavLink>
                    </div>
                    <div className={styles.users__name_status}>
                        <div className={styles.users__name}>{props.user.name}</div>
                        <div>{props.user.status != null ? props.user.status : "status" }</div>
                    </div>
                </div>
                <div className={styles.users__box_follow}>
                    <div className={styles.users__follow}>
                        { props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {props.unfollow(props.user.id);}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {props.follow(props.user.id);}}>Follow</button> }
                    </div>
                </div>
            </div>
    )
}

export default User;