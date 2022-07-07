import React from 'react';

const Online = ({user}) => {

  return (
    
    <li className="userInfos">
        <div className="rightbarProfileImgContainer">
            <img src={user.profilePicture} alt="" className="friend_picture"/>
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}

export default Online;