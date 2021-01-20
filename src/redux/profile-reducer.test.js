import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';
import {render, screen} from "@testing-library/react";
import App from "../App";

let initialState = {
    postsData: [
        {id: 1, message: 'Hello there!', likesCount: 24},
        {id: 2, message: 'Your focus determines your reality.', likesCount: 3}
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expectation
    expect(newState.postsData[2].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decremented', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(1);
});

test(`after deleting length shouldn't be decremented if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(100);
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(2);
});