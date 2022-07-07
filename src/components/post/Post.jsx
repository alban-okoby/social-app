import React from 'react';
// Material Icons
import { MoreVert, EmojiEmotions} from '@mui/icons-material';
// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';
// Components 
import './Post.css';
import { Users } from '../../data/data';

const Post = ({post}) => { 
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
                        <FontAwesomeIcon icon={faThumbsUp} className='heart' 
                        />
                   </li>
                    <li className="icon">
                        <FontAwesomeIcon icon={faHeart} className='heart' 
                        />
                   </li>
                   <li className="icon">
                        <EmojiEmotions 
                        />
                   </li>
                    <span className='postCount'>17 </span>
                </div>
                <div className='postBottomCenter'>
                    <FontAwesomeIcon icon={faComment} className='icon'
                    />
                    <span className='postCommentCount'> 22 </span>
                </div>
                <div className='postBottomRight'>
                    <FontAwesomeIcon icon={faShare} className='icon' 
                   />
                    <span className='postCommentText'> 9 </span>
                    <li></li>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Post;