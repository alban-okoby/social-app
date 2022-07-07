import React from 'react';
import './Offline.css';

const Offline = ({user}) => {
  return (
        <li className="sidebar-friend">
            <img src={user.profilePicture} className="friend_picture" alt={user.username}/>
            <span className=""> {user.username}</span>
        </li>
    )
}

export default Offline;