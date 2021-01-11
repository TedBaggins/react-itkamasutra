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
            {/*<div>*/}
            {/*    <img src="https://pcvector.net/uploads/posts/2020-05/1588792159_blurred-light-background-min.jpg"></img>*/}
            {/*</div>*/}
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