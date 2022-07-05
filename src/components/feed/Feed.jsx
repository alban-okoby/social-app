import React from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <div className="wrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div> 
    </div>
  )
}

export default Feed;