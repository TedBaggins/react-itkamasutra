import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.posts__add}>
                <div>
                    <Field name={"newPostField"}
                           component={Textarea}
                           placeholder={"Enter something"}
                           validate={[maxLength10]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

    let postsElements = [...props.postsData].reverse().map( post => {
        return <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    });

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostField);
    }

    return (
        <div className={styles.posts}>
            <p className={styles.posts__title}>My posts</p>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={styles.post_items}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;