import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://pcvector.net/uploads/posts/2020-05/1588792159_blurred-light-background-min.jpg"></img>
            </div>
            <div className={s.profileinfo__description}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;