import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../styles/UserProfile.css';
import Article from './Article';

export default function OtherProfile() {
  const { username } = useParams();
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        `http://127.0.0.1:3000/api/blogs/${username}`
      );
      setUserArticles(await response.json());
    };
    getArticles();
  }, [username]);

  return (
    <div className='OtherProfile'>
      <article className='user__article'>
        {console.log(userArticles)}
        {userArticles.map((article) => {
          return <Article key={article._id} {...article} />;
        })}
      </article>
    </div>
  );
}
