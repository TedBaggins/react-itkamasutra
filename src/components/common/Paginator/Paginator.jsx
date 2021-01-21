import React from 'react';
import styles from './Paginator.module.css';
import Pagination from '@material-ui/lab/Pagination';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    return (
        <div className={styles.paginator}>
            <Pagination count={pagesCount} variant="outlined" shape="rounded" siblingCount={2}
                        onChange={(event, page) => { props.onPageChange(page); }}/>
        </div>
    )
}

export default Paginator;