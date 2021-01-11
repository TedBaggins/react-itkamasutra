import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.postsData.map( post => {
        return <Post message={post.message} likesCount={post.likesCount} />
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.posts}>
            <p className={styles.posts__title}>My posts</p>
            <div className={styles.posts__add}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.post_items}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;