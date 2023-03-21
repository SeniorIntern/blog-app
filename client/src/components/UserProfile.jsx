import React, { useEffect, useState } from 'react';
import { apiUrl } from '../config.json';
import Article from './Article';
import '../styles/UserProfile.css';

export default function UserProfile({ userObj }) {
  useEffect(() => {
    if (!localStorage.getItem('token')) window.location = '/';
  }, []);

  const apiEndpoint = apiUrl + `blogs/${userObj.username}`;

  const [myArticles, setMyArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(apiEndpoint);
      setMyArticles(await response.json());
    };
    getArticles();
  }, []);

  return (
    <div className='UserProfile'>
      {/* fetch user details and display */}
      <div className='user__information'>
        <details open>
          <summary>
            <u>User Information</u>
          </summary>
          <section>
            <p>username: {userObj.username}</p>
            <p>email: {userObj.email}</p>
            <p>Total Blog Post(s):</p>
          </section>
        </details>
      </div>
      <article className='user__article'>
        {console.log(myArticles)}
        {myArticles.map((article) => {
          return <Article key={article._id} {...article} />;
        })}
      </article>
    </div>
  );
}
