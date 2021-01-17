import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={"email"}
                        type={"text"} placeholder={"Email"}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

// export default Login;
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);