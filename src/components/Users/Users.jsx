import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../images/user-photo-default.jpg';

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });

        // props.setUsers([
        //     {id: 1, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: false, fullName: 'John', status: 'status', location: {city: 'city', country: 'country'}},
        //     {id: 2, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: false, fullName: 'William', status: 'status', location: {city: 'city', country: 'country'}},
        //     {id: 3, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: true, fullName: 'Mia', status: 'status', location: {city: 'city', country: 'country'}},
        //     {id: 4, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: false, fullName: 'Samuel', status: 'status', location: {city: 'city', country: 'country'}},
        //     {id: 5, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: true, fullName: 'Chloe', status: 'status', location: {city: 'city', country: 'country'}},
        //     {id: 5, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: false, fullName: 'James', status: 'status', location: {city: 'city', country: 'country'}}
        // ]);
    }

    return (
        <div>
            {
                props.users.map( u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <img className={styles.userPhoto} src={ u.photos.small != null ? u.photos.small : userPhoto}></img>
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