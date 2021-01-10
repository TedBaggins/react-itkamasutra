import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <div>
                <img src="https://pcvector.net/uploads/posts/2020-05/1588792159_blurred-light-background-min.jpg"></img>
            </div>
            <div className={s.profileinfo__description}>
                <img src={props.profile.photos.large} />
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;