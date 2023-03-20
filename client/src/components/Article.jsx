import React from 'react';
import dummyImg from '../assets/img/programming.avif';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../styles/Article.css';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export default function Article({
  _id,
  title,
  description,
  user,
  datePosted,
  category,
}) {
  let userTokenDecode = { email: '0@gmail.com' };
  if (localStorage.getItem('token')) {
    const userTokenUnDecoded = localStorage.getItem('token');
    userTokenDecode = jwtDecode(userTokenUnDecoded);
  }

  const date = new Date(datePosted);
  const year = date.getFullYear().toString().slice(-2);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate().toString();

  const alphabeticalDate = `${year} ${month} ${day}`;

  const apiEndpoint = apiUrl + 'blogs';

  const deleteArticle = async (blogId) => {
    if (window.confirm(`Are you sure you want to delete?: ${blogId}`)) {
      try {
        await axios.delete(`${apiEndpoint}/${blogId}`, {
          headers: { 'x-auth-token': userTokenUnDecoded },
        });
      } catch (error) {
        window.alert(error.message);
      }
    }
  };

  return (
    <article className='article'>
      <div className='article__author'>
        <div className='author__name'>
          <p>
            <PermIdentityOutlinedIcon /> {user.username.toUpperCase()}
          </p>
          <time>{alphabeticalDate}</time>
        </div>
        {/* only render when user.email matches logged user's email*/}
        {user.email === userTokenDecode.email ? (
          <React.Fragment>
            <div className='author__action'>
              <p>
                <EditOutlinedIcon />
              </p>
              <p onClick={() => deleteArticle(_id)}>
                <DeleteOutlineOutlinedIcon />
              </p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
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
