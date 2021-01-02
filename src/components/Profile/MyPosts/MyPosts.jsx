import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.postsData.map( post => {
        return <Post message={post.message} likesCount={post.likesCount} />
    });

    let addPost = () => {

    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;