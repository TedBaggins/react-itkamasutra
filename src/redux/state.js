import {rerenderEntireTree} from '../render';

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;