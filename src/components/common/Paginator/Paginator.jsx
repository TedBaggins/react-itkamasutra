import React from 'react';
import styles from './Paginator.module.css';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.paginator}>
            {pages.map(p => {
                if (p > 20) {
                    return;
                }
                return <span onClick={(e) => {props.onPageChange(p)}} className={props.currentPage === p && styles.paginator_selected}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;