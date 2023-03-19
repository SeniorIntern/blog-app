import React, { useEffect, useState } from 'react';
import Article from './Article';
import '../styles/UserProfile.css';

export default function UserProfile({ userObj }) {
  const [myArticles, setMyArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        `http://127.0.0.1:3000/api/blogs/${userObj.username}`
      );
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
