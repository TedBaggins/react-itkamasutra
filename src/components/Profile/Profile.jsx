import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://pcvector.net/uploads/posts/2020-05/1588792159_blurred-light-background-min.jpg"></img>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;