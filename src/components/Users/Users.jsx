import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../images/user-photo-default.jpg';

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        );
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            }
        );
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                        return <span onClick={(e) => {this.onPageChange(p)}} className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                    })}          
                </div>
                {
                    this.props.users.map( u => {
                        return <div key={u.id}>
                            <span>
                                <div>
                                <img className={styles.userPhoto} src={ u.photos.small != null ? u.photos.small : userPhoto}></img>
                                </div>
                                <div>
                                    { u.followed 
                                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> 
                                        : <button onClick={() => this.props.follow(u.id)}>Follow</button> }
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
    
}

export default Users;