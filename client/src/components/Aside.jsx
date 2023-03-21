import React, { useEffect, useState } from 'react';
import { apiUrl } from '../config.json';
import '../styles/Aside.css';

export default function Aside({ name }) {
  const [articleTitle, setArticleTitle] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`${apiUrl}blogs/${name}`);
      setArticleTitle(await response.json());
    };
    getArticles();
  }, []);

  return (
    <aside className='aside'>
      {name ? (
        <React.Fragment>
          <div className='recent__articles'>
            <h2>Hello "{name.toUpperCase()}"</h2>
            <h2>
              <u>Your Recent Posts:</u>
            </h2>
            <div>
              {articleTitle.map((title) => {
                const MAX_WORDS = 10; // Maximum number of words to display
                const words = title.description
                  .split(' ')
                  .slice(0, MAX_WORDS)
                  .join(' ');
                const description =
                  words +
                  (title.description.split(' ').length > MAX_WORDS
                    ? '...'
                    : '');

                return (
                  <div key={title._id} className='blog__title'>
                    <h1>{title.title}</h1>
                    <p>{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </aside>
  );
}
