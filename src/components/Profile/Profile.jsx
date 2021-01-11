import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

const Profile = (props) => {

    return (
        <section className={styles.profile}>
            <ProfileInfo profile={props.profile}/>           
            <MyPostsContainer/>
        </section>
    );
}

export default Profile;