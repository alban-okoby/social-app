import React from 'react';
import { PermMedia } from '@mui/icons-material';

const Share = () => {
  return (
    <div className="share">
        <div className="wrapper">
            <div className="top">
                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="friend_picture" />
                <input className="input" placeholder="Exprimer vos pensez, librement" />
            </div>
            <hr className='hr' />
            <div className='bottom'>
                <div className='options'>
                    <div className='option'>
                        <PermMedia className="icon" />
                    <span className="option-text">Photo  ou Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share;