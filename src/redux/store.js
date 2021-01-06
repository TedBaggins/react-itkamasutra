import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

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
            ],
            newMessageBody: ''
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;