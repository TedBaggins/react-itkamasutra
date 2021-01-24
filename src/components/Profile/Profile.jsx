import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

const Profile = (props) => {

    return (
        <section className={styles.profile}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateUserStatus={props.updateUserStatus} saveUserPhoto={props.saveUserPhoto}/>
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;