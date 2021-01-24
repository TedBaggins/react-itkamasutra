import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import user_photo_default from '../../../images/user_default.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
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
            </div>
        </div>
    )
}

export default ProfileInfo;