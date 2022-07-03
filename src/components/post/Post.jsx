import React from 'react';
import { MoreVert} from '@mui/icons-material';
import './Post.css';
import profileImg from  '../../assets/image/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';


const Post = () => {
  return (
    <div className='post'>
        <div className='wrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src={profileImg} className='profile_picture' alt='description' />
                    <b className='userName'>Cerveau Plus</b>
                    <span className='postDate'> Il y a 3 min</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert />
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'> Le weekend est chaud bouillant !</span>
                <img src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                alt="description"
                className='object-cover h-48 w-96'
                />
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <FontAwesomeIcon icon={faHeart}className='heart' />
                    <span className=''> John Doe et 17 personnes aiment ça</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'> 22 commentaires</span>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Post;