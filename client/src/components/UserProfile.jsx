import React from 'react';
import Article from './Article';

export default function UserProfile() {
  return (
    <div className='UserProfile'>
      {/* fetch user details and display */}
      <div className='user__information'>
        <h1>USERNAME</h1>
        <p>username:</p>
        <p>email:</p>
        <p>Total Blog Post(s):</p>
      </div>
      <article className='user__article'>
        {/* map user articles */}
        {/* <Article /> */}
      </article>
    </div>
  );
}
