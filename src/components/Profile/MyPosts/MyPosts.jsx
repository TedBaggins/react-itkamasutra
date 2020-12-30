import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount="23"/>
                <Post message="It's my first post" likesCount="0"/>
            </div>
        </div>
    )
}

export default MyPosts;