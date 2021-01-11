import s from './Post.module.css';
import user_default from '../../../../images/user_default.png';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post__message_wrap}>
                <img src={user_default}/>
                {props.message}
            </div>
            <div className={s.post__like_wrap}>
                <span className={s.post__like}>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;