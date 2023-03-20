import Article from './Article';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import '../styles/Main.css';
import { useEffect, useState } from 'react';
import Section from './Section';
import { apiUrl } from '../config.json';

export default function Main() {
  const apiEndpoint = apiUrl + 'blogs/';

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(apiEndpoint);
      setArticles(await response.json());
    };
    getArticles();
  }, [articles]);

  return (
    <main className='main'>
      <div className='feed__options'>
        <div className='sort__options'>
          <p>
            <StarBorderOutlinedIcon />
            Personalized
          </p>
          <p>
            <ScheduleOutlinedIcon />
            Recent
          </p>
          <p>
            <AutoFixHighOutlinedIcon />
            Features
          </p>
        </div>
        <p className='space'></p>
        <div className='view__options'>
          <p>
            <FilterAltOutlinedIcon />
          </p>
          <p>
            <ViewAgendaOutlinedIcon />
            View
          </p>
        </div>
      </div>
      <article>
        {articles.map((article) => {
          return <Article key={article._id} {...article} />;
        })}
      </article>
    </main>
  );
}
