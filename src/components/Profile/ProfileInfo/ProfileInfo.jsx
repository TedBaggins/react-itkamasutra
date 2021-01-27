import React, {useState} from "react";
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import user_photo_default from '../../../images/user_default.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from "./ProfileDataForm";
import ProfileReduxDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    let uploadPhotoBox = React.createRef();

    if(!props.profile) {
        return (
            <Preloader/>
        )
    }

    const onUserPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.saveUserPhoto(e.target.files[0]);
        }
    }

    const onMouseOverUserPhoto = (e) => {
        if (props.isOwner) uploadPhotoBox.current.style.display = "block";
    }
    const onMouseOutUserPhoto = (e) => {
        if (props.isOwner) uploadPhotoBox.current.style.display = "none";
    }

    // const onSubmit = (formData) => {
    //     props.saveProfile(formData).then(() => {
    //         setEditMode(false);
    //     })
    // }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        })
        //console.log(formData);
    }

    return (
        <div className={styles.profileinfo}>
            <div className={styles.profileinfo__photo} onMouseOver={onMouseOverUserPhoto} onMouseOut={onMouseOutUserPhoto}>
                <img src={props.profile.photos.large || user_photo_default} />
                {props.isOwner &&
                    <div className={styles.profileinfo__upload_box} ref={uploadPhotoBox}>
                        <input type={"file"} id={"input-user-photo-upload"} onChange={onUserPhotoSelected}/>
                        <label htmlFor="input-user-photo-upload" className={styles.profileinfo__upload_btn}>
                            <span>Update photo</span>
                        </label>
                    </div>}
            </div>
            <div className={styles.profileinfo__description}>
                <span className={styles.profileinfo__name}>{props.profile.fullName}</span>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                {editMode
                    ? <ProfileReduxDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                   activateEditMode={() => {setEditMode(true)}}/>
                }
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={styles.profileinfo__contact_item}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={styles.profileinfo__about}>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div className={styles.profileinfo__contact_box}>
                {/*<b>Contacts</b>: <div className={styles.profileinfo__contact_items}>{Object.keys(props.profile.contacts).map(key => {*/}
                {/*    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
                {/*})}</div>*/}
                <b>Contacts</b>: <div className={styles.profileinfo__contact_items}>{Object.entries(props.profile.contacts)
                    .filter(contact => contact[1] !== null && contact[1] !== "")
                    .map(key => {
                        return <Contact key={key[0]} contactTitle={key[0]} contactValue={props.profile.contacts[key[0]]}/>
                    })
                }</div>
            </div>
            {props.isOwner && <div className={styles.profileinfo__edit}><button className={styles.profileinfo__edit_btn} onClick={props.activateEditMode}>Edit</button></div>}
        </div>
    )
}

export default ProfileInfo;