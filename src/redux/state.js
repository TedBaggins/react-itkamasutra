const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello there!', likesCount: 24},
                {id: 2, message: 'Your focus determines your reality.', likesCount: 3}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'John'},
                {id: 2, name: 'William'},
                {id: 3, name: 'Mia'},
                {id: 4, name: 'Samuel'},
                {id: 5, name: 'Chloe'},
                {id: 6, name: 'James'},
            ],
            messagesData: [
                {id: 1, message: 'Hello there!'},
                {id: 2, message: 'Your focus determines your reality.'},
                {id: 3, message: 'Do. Or do not. There is no try.'},
                {id: 4, message: 'I’ve got a bad feeling about this.'},
                {id: 5, message: 'Great, kid. Don’t get cocky.'},
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}

export default store;
window.store = store;