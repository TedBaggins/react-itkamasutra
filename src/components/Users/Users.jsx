import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../images/user-photo-default.jpg';
import {NavLink} from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    if (p > 20) {
                        return;
                    }
                    return <span onClick={(e) => {props.onPageChange(p)}} className={props.currentPage === p && styles.selectedPage}>{p}</span>
                })}          
            </div>
            {
                props.users.map( u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={styles.userPhoto} src={ u.photos.small != null ? u.photos.small : userPhoto}></img>
                                </NavLink>
                            </div>
                            <div>
                                { u.followed 
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                                    : <button onClick={() => props.follow(u.id)}>Follow</button> }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    )
}

export default Users;