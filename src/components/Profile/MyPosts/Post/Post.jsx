import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post__message_wrap}>
                <img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"/>
                {props.message}
            </div>
            <div className={s.post__like_wrap}>
                <span className={s.post__like}>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;