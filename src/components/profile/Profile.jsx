import React from 'react';

// Custom components
import Rightbar from '../rightbar/Rightbar';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/Feed';

// Styles
import './Profile.css';

const Profile = () => {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar />
        <div className='profileRight'>
            <div className='profileRightTop'>
                <div className='profileCover'>
                    <img src="https://dummyimage.com/1640x460/acf/000" className='profileCoverImg' />
                    <img src="https://dummyimage.com/1640x760/aaa/fff" className='profileUserImg'/>
                </div>
            </div>
            <div className='profileRightBottom'>
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Profile;