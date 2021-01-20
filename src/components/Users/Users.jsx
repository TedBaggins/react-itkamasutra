import React from 'react';
import styles from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

    return (
        <section className={styles.users}>
            <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize} onPageChange={props.onPageChange}/>
            {
                props.users.map( user => {
                    return <User key={user.id} user={user} followingInProgress={props.followingInProgress}
                                 follow={props.follow} unfollow={props.unfollow}/>
                })
            }
        </section>
    )
}

export default Users;