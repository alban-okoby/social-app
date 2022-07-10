import React from 'react';
import './Rightbar.css';
import Online from '../online/Online.jsx';
import { Users } from '../../data/data';
import bithdayGif from '../../assets/image/bithday.gif';

const Rightbar = (profile) => {

	const HomeRightbar = () => {
		return (
			<>
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
			</>
		)
	};

	const ProfileRightbar = () => {
		
		return (
			<>
				<h4 className='rightbarTitle'> Information sur cet utilisateur</h4>
				<section className='rightbarInfos'>
					<div className='rightbarInfoIem'>
						<span className='infoKey'> Pays :</span>
						<span className='infoValue'> Haiti </span>
					</div>
					<div className='rightbarInfoIem'>
						<span className='infoKey'> Pays :</span>
						<span className='infoValue'> Haiti </span>
					</div>
					<div className='rightbarInfoIem'>
						<span className='infoKey'> Pays :</span>
						<span className='infoValue'> Haiti </span>
					</div>
					<div className='rightbarInfoIem'>
						<span className='infoKey'> Pays :</span>
						<span className='infoValue'> Haiti </span>
					</div>
				</section>
				<h4 className='rightbarTitle'> Amis </h4>
				<div className='rightbarFollowing'>
					<img src="https://dummyimage.com/1640x460/222/fff" />
					<span className='username'> Jean Kouakou</span>
				</div>
				<div className='rightbarFollowing'>
					<img src="https://dummyimage.com/1640x460/222/fff" />
					<span className='username'> Nicola Garba</span>
				</div>
				<div className='rightbarFollowing'>
					<img src="https://dummyimage.com/1640x460/bec/aaa" />
					<span className='username'> Madou becet</span>
				</div>
				<div className='rightbarFollowing'>
					<img src="https://dummyimage.com/1640x460/222/fff" />
					<span className='username'> Daouda Digbeu</span>
				</div>
				
			</>
		)
	}
	return (
		<div className="rightbar">
			<div className="wrapper">
				{ profile?  <ProfileRightbar /> : <HomeRightbar /> }
			</div>
		</div>
	)
}

export default Rightbar;