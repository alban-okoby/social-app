import React from 'react';
import './Rightbar.css';
import Online from '../online/Online.jsx';
import { Users } from '../../data/data';
import bithdayGif from '../../assets/image/bithday.gif';

const Rightbar = () => {
  return (
    <div className="rightbar">
		<div className="wrapper">
			<div className="container">
				<img className="bithdayImg" src={bithdayGif} alt="description" />
				<span className="bithdayText"> 		
					<b>Kimy</b> et 2 autres amis font leurs anniversairs aujoourd'hui 
				</span>
			</div>
			<img src="https://mdbootstrap.com/img/new/avatars/4.jpg" alt="" className="imgProfile" />
			<h4 className="rightbarTitle"> Amis en ligne</h4>
			<ul>
				{Users.map(u => 
					<Online key={u.id} user={u} />
				)}
			</ul>
		</div>
    </div>
  )
}

export default Rightbar;