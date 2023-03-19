import React from 'react';
import dummyImg from '../assets/img/programming.avif';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import '../styles/Article.css';

export default function Article({
  title,
  description,
  user,
  datePosted,
  category,
}) {
  const date = new Date(datePosted);
  const year = date.getFullYear().toString().slice(-2);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate().toString();

  const alphabeticalDate = `${year} ${month} ${day}`;

  return (
    <article className='article'>
      <div className='article__author'>
        <div className='author__name'>
          <p>
            <PermIdentityOutlinedIcon /> {user.username.toUpperCase()}
          </p>
          <time>{alphabeticalDate}</time>
        </div>
      </div>
      <div className='article__content'>
        <div className='content__description'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='article__image'>
          <img src={dummyImg} alt='programming' />
        </div>
      </div>
      <div className='article__informations'>
        <div className='article__tags'>
          <p>{category.categoryName}</p>
        </div>
        <div className='article__likes'>
          <FavoriteBorderOutlinedIcon />
          <p>24</p>
        </div>
      </div>
    </article>
  );
}
