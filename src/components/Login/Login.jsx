import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={"name"}
                        type={"text"} placeholder={"Name"}
                        validate={[requiredField]}/></div>
            <div><Field component={Input} name={"password"}
                        type={"text"} placeholder={"Password"}
                        validate={[requiredField]}/></div>
            <div><Field component={Input} name={"rememberMe"}
                        type={"checkbox"}/>remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;