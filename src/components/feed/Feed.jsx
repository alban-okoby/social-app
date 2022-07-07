import React from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './Feed.css';
import {Posts} from '../../data/data';

const Feed = () => {
  return (
    <div className="feed">
      <div className="wrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
          )
        )
        }
        
      </div> 
    </div>
  )
}

export default Feed;