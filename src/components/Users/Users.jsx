import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../images/user_default.png';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import {usersAPI} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return (
        <section className={styles.users}>
            <div className={styles.users__pages}>
                {pages.map(p => {
                    if (p > 20) {
                        return;
                    }
                    return <span onClick={(e) => {props.onPageChange(p)}} className={props.currentPage === p && styles.selectedPage}>{p}</span>
                })}          
            </div>
            {
                props.users.map( u => {
                    return <div key={u.id} className={styles.users__item}>
                        <div className={styles.users__box_photo_name}>
                            <div className={styles.users__photo}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={styles.userPhoto} src={ u.photos.small != null ? u.photos.small : userPhoto}></img>
                                </NavLink>
                            </div>
                            <div className={styles.users__name_status}>
                                <div className={styles.users__name}>{u.name}</div>
                                <div>{u.status != null ? u.status : "status" }</div>
                            </div>
                        </div>
                        <div className={styles.users__box_follow}>
                            <div className={styles.users__follow}>
                                { u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.unfollow(u.id);}}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.follow(u.id);}}>Follow</button> }
                            </div>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default Users;