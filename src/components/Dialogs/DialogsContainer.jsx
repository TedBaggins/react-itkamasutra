import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

export default compose( // возвращает "DialogsContainer"
    connect(mapStateToProps, mapDispatchToProps), // рез-т вызова withAuthRedirect закидывается сюда
    withAuthRedirect // Dialogs сперва закидывается сюда
)(Dialogs)