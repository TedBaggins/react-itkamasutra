import Dialogs from './Dialogs';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
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
        sendMessage: (newMessage) => {
            dispatch(sendMessageCreator(newMessage));
        }
    }
}

export default compose( // возвращает "DialogsContainer"
    connect(mapStateToProps, mapDispatchToProps), // рез-т вызова withAuthRedirect закидывается сюда
    withAuthRedirect // Dialogs сперва закидывается сюда
)(Dialogs)