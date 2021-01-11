import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div className={styles.profileinfo}>
            <div className={styles.profileinfo__photo}>
                <img src={props.profile.photos.large} />
            </div>
            <div className={styles.profileinfo__description}>
                Description
            </div>
        </div>
    )
}

export default ProfileInfo;