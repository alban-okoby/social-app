import React from 'react';
import './Rightbar.css';

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
				<li className="userInfos">
					<div className="rightbarProfileImgContainer">
						<img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" className="friend_picture"/>
					<span className="rightbarOnline"></span>
					</div>
					<span className="rightbarUsername">Cecile Koffi</span>
				</li>
				<li className="userInfos">
					<div className="rightbarProfileImgContainer">
						<img src="https://mdbootstrap.com/img/new/avatars/7.jpg" alt="" className="friend_picture"/>
					<span className="rightbarOnline"></span>
					</div>
					<span className="rightbarUsername">Ruth Fidele</span>
				</li>
				
				<li className="userInfos">
					<div className="rightbarProfileImgContainer">
						<img src="https://mdbootstrap.com/img/new/avatars/18.jpg" alt="" className="friend_picture"/>
					<span className="rightbarOnline"></span>
					</div>
					<span className="rightbarUsername">Joel Assemian</span>
				</li>
				<li className="userInfos">
					<div className="rightbarProfileImgContainer">
						<img src="https://mdbootstrap.com/img/new/avatars/21.jpg" alt="" className="friend_picture"/>
					<span className="rightbarOnline"></span>
					</div>
					<span className="rightbarUsername">Bill Gate</span>
				</li>
				<li className="userInfos">
					<div className="rightbarProfileImgContainer">
						<img src="https://mdbootstrap.com/img/new/avatars/3.jpg" alt="" className="friend_picture"/>
					<span className="rightbarOnline"></span>
					</div>
					<span className="rightbarUsername">Marc Zukerberg</span>
				</li>
				<li className="userInfos">
					<div className="rightbarProfileImgContainer">
						<img src="https://mdbootstrap.com/img/new/avatars/10.jpg" alt="" className="friend_picture"/>
					<span className="rightbarOnline"></span>
					</div>
					<span className="rightbarUsername">John Kenedy</span>
				</li>
			</ul>
		</div>
    </div>
  )
}

export default Rightbar;