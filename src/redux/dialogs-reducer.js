const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessage
    }
}
