import React from 'react';
// Material Icons
import { MoreVert, EmojiEmotions} from '@mui/icons-material';
import profileImg from  '../../assets/image/profile.png';
// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';
// Components 
import './Post.css';


const Post = () => {
  return (
    <div className='post'>
        <div className='wrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src={profileImg} className='profile_picture' alt='description' />
                    <b className='userName'>Cerveau Plus</b>
                    <span className='postDate'> 3 min</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert />
                </div>
            </div>
            <div className='postCenter'>
                <p className='postText'> Le weekend est chaud bouillant ! Tout ça c'est GOD sinon personne est plus mieux que personne.  #StepByStep</p>
                <img src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                alt="description"
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