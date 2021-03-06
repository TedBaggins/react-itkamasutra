import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormControl.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={"email"}
                        type={"text"} placeholder={"Email"}
                        validate={[requiredField]}/></div>
            <div><Field component={Input} name={"password"}
                        type={"password"} placeholder={"Password"}
                        validate={[requiredField]}/></div>
            <div><Field component={Input} name={"rememberMe"}
                        type={"checkbox"} label={"remember me"}/>
                        </div>
            {props.captchaUrl && <div className={styles.captcha__box}><img src={props.captchaUrl}/></div>}
            {props.captchaUrl && <div><Field component={Input} name={"captcha"} placeholder={"Enter captcha"}
                                             type={"text"} validate={[requiredField]}/>
            </div>}
            { props.error &&
                <div className={styles.form_error}>
                    <span>{props.error}</span>
                </div>
            }
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={styles.login__box}>
            <p className={styles.login__title}>Login</p>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

// export default Login;
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});
export default connect(mapStateToProps, {login})(Login);