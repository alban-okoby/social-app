import { RssFeed, School, HelpOutline, WorkOutline, Event, PlayCircleFilledOutlined, Bookmark, Group } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-list">
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
          </div>
        </div>
    </div>
  )
}

export default Sidebar;
