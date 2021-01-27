import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import styles from './ProfileDataForm.module.css';

const ProfileDataForm = (props) => {

    return (
        <div className={styles.profileDataForm__box}>
            <form onSubmit={props.handleSubmit}>
                <div className={styles.profileDataForm__formControl}>
                    <label htmlFor="fullName">Name</label>
                    <Field component={Input} name={"fullName"}
                            type={"text"} placeholder={"Name"}
                            id={"fullName"}/>
                </div>
                <div className={styles.profileDataForm__formControl}>
                    <label htmlFor="lookingForAJob">Looking for a job</label>
                    <Field component={Input} name={"lookingForAJob"}
                           id={"lookingForAJob"} type={"checkbox"}/>
                </div>
                <div className={styles.profileDataForm__formControl}>
                    <label htmlFor="lookingForAJobDescription">Professional skills</label>
                    <Field component={Textarea} name={"lookingForAJobDescription"}
                           id={"lookingForAJobDescription"} type={"textarea"}/>
                </div>
                <div className={styles.profileDataForm__formControl}>
                    <label htmlFor="aboutMe">About me</label>
                    <Field component={Input} name={"aboutMe"}
                           type={"text"} placeholder={"About me"}
                           id={"aboutMe"}/>
                </div>
                <div>
                    <p>Contacts:</p>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <div key={key} className={styles.profileDataForm__formControl}>
                            <label htmlFor={key}>{key}</label>
                            <Field component={Input} name={"contacts." + key}
                                   type={"text"} placeholder={key}
                                   id={key}/>
                        </div>
                    })}
                </div>
                { props.error &&
                <div className={styles.form_error}>
                    <span>{props.error}</span>
                </div>
                }
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

const ProfileReduxDataForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm);

export default ProfileReduxDataForm;