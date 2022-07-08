import { useState } from 'react';
// Material Icons
import { MoreVert, EmojiEmotions} from '@mui/icons-material';
// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';
// Data test and components 
import { Users } from '../../data/data';
// Customises components styles
import './Post.css';


const Post = ({post}) => { 

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }
  return (
    <div className='post'>
        <div className='wrapper'>
            <div className='postTop'>

                <div className='postTopLeft'>
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} className='profile_picture' alt={Users.filter((u) => u.id === post?.userId)[0].username} />
                    <b className='userName'>
                        {Users.filter((u) => u.id === post?.userId)[0].username}
                    </b>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert />
                </div>

            </div>

            <div className='postCenter'>
                <p className='postText'> {post.description} </p>
                <img src={post.image}
                alt={post.description}
                className='object-cover h-48 w-96'
                />
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <li className="icon">
                        <FontAwesomeIcon icon={faThumbsUp}      className='heart' 
                        onClick={likeHandler}/>
                   </li>
                    <li className="icon">
                        <FontAwesomeIcon icon={faHeart} className='heart'
                        onClick={likeHandler} 
                        />
                   </li>
                   <li className="icon">
                        <EmojiEmotions onClick={likeHandler}
                        />
                   </li>
                    <span className='postCount'>{like} </span>
                </div>
                <div className='postBottomCenter'>
                    <FontAwesomeIcon icon={faComment} className='icon'
                    />
                    <span className='postCommentCount'> {post.comment} </span>
                </div>
                <div className='postBottomRight'>
                    <FontAwesomeIcon icon={faShare} className='icon' 
                   />
                    <span className='postComment'>{post.share} </span>
                    <li></li>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Post;