import { useEffect, useState } from 'react';
import { apiUrl } from '../config.json';
import Article from './Article';
import '../styles/Main.css';

export default function Main() {
  const apiEndpoint = apiUrl + 'blogs/';
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(apiEndpoint);
      setArticles(await response.json());
    };
    getArticles();
  }, []);

  return (
    <main className='main'>
      <article>
        {articles.map((article) => {
          return <Article key={article._id} {...article} />;
        })}
      </article>
    </main>
  );
}
