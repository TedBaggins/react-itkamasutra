const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = { 
    users: [
        // {id: 1, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: false, fullName: 'John', status: 'status', location: {city: 'city', country: 'country'}},
        // {id: 2, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: false, fullName: 'William', status: 'status', location: {city: 'city', country: 'country'}},
        // {id: 3, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: true, fullName: 'Mia', status: 'status', location: {city: 'city', country: 'country'}},
        // {id: 4, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: false, fullName: 'Samuel', status: 'status', location: {city: 'city', country: 'country'}},
        // {id: 5, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: true, fullName: 'Chloe', status: 'status', location: {city: 'city', country: 'country'}},
        // {id: 5, photoUrl: 'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg', followed: false, fullName: 'James', status: 'status', location: {city: 'city', country: 'country'}}
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return { 
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW: 
            return { 
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: 
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW, 
        userId: userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, 
        users: users
    }
}
