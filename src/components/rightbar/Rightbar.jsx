import React from 'react';
import './Rightbar.css';

import bithdayGif from '../../assets/image/bithday.gif';

const Rightbar = () => {
  return (
    <div className="rightbar">
		<div className="container">
			<img className="bithdayImg" src={bithdayGif} alt="description" />
			<span className="bithdayText"> 		
			<b>Kimy</b> et 2 autres amis font leurs anniversairs aujoourd'hui </span>
		</div>
    </div>
  )
}

export default Rightbar;