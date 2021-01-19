import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import user_photo_default from '../../../images/user_default.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={styles.profileinfo}>
            <div className={styles.profileinfo__photo}>
                <img src={props.profile.photos.large != null
                ? props.profile.photos.large
                : user_photo_default} />
            </div>
            <div className={styles.profileinfo__description}>
                <span className={styles.profileinfo__name}>{props.profile.fullName}</span>
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;