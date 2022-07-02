import { RssFeed, School, HelpOutline, WorkOutline, Event, PlayCircleFilledOutlined, Bookmark, Group } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <ul className="sidebar-list">  
              <li className="sidebar-list-item">
                <RssFeed className="sidebar-icon" />
                <span className="sidebar-list-item-text"> rss</span>
              </li>
              <li className="sidebar-list-item">
                <School className="sidebar-icon" />
                <span className="sidebar-list-item-text"> Cours</span>
              </li>
              <li className="sidebar-list-item">
                <Group className="sidebar-icon" />
                <span className="sidebar-list-item-text"> Group</span>
              </li>
              <li className="sidebar-list-item">
                <Bookmark className="sidebar-icon" />
                <span className="sidebar-list-item-text"> Bibliothèque</span>
              </li>
              <li className="sidebar-list-item">
                <PlayCircleFilledOutlined className="sidebar-icon" />
                <span className="sidebar-list-item-text"> Vidéos</span>
              </li>
              <li className="sidebar-list-item">
                <Event className="sidebar-icon" />
                <span className="sidebar-list-item-text"> Evènements</span>
              </li>
              <li className="sidebar-list-item">
                <WorkOutline className="sidebar-icon" />
                <span className="sidebar-list-item-text"> jobs</span>
              </li>
              <li className="sidebar-list-item">
                <HelpOutline className="sidebar-icon" />
                <span className="sidebar-list-item-text"> FAQ</span>
              </li>
            </ul>
            <button className="sidebar-button btn btn-preference">
                Voir plus
            </button>
            <hr className="hr"/>
            <span className="hr"></span>
            <ul>
              <li className="sidebar-friend">
                <img src="https://mdbootstrap.com/img/new/avatars/4.jpg" className="friend_picture"/>
                <span className=""> Doctora Nino</span>
              </li>
              <li className="sidebar-friend">
                <img src="https://mdbootstrap.com/img/new/avatars/19.jpg" className="friend_picture"/>
                <span className=""> Miss'lo </span>
              </li>
              <li className="sidebar-friend">
                <img src="https://mdbootstrap.com/img/new/avatars/13.jpg" className="friend_picture"/>
                <span className=""> Poupée Kim</span>
              </li>
              <li className="sidebar-friend">
                <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" className="friend_picture"/>
                <span className=""> Jean Batiste</span>
              </li>
              <li className="sidebar-friend">
                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="friend_picture"/>
                <span className=""> Aigle Dimbé</span>
              </li>
              <li className="sidebar-friend">
                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="friend_picture"/>
                <span className=""> John Doe</span>
              </li>
              <li className="sidebar-friend">
                <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" className="friend_picture"/>
                <span className=""> Andi Souag</span>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;
