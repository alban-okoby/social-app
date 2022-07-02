import React from 'react';
import { EmojiEmotions, PermMedia, Room } from '@mui/icons-material';
import './Share.css';

const Share = () => {
  return (
    <div className="share">
        <div className="wrapper">
            <div className="top">
                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="friend_picture" alt="description" />
                <input className="SearchInput" placeholder="Exprimer vos pensez, partagez librement" />
            </div>
            <hr className='hr' />
            <div className='bottom'>
                <div className='options'>
                    <div className='option'>
                        <PermMedia htmlColor="tomato" className="icon" 
                        />
                        <span className="option-text">media</span>
                    </div>
                    <div className='option'>
                        <Room className="icon" htmlColor="blue"
                        />
                        <span className="option-text" >Position</span>
                    </div>
                    <div className='option'>
                        <EmojiEmotions        className="icon" 
                        htmlColor="goldenrod"
                        />
                        <span className="option-text">Humeur</span>
                    </div>
                </div>
                <button className="btn btn-preference">publier</button>
            </div>
        </div>
    </div>
  )
}

export default Share;