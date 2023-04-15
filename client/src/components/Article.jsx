import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { apiUrl } from '../config.json';
import dummyImg from '../assets/img/programming.avif';
import '../styles/Article.css';

function formatDate(date) {
  const year = date.getFullYear().toString().slice(-2);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate().toString();
  return `${year} ${month} ${day}`;
}

export default function Article({
  _id,
  title,
  description,
  user,
  datePosted,
  categoryName,
  updatedAt,
}) {
  const apiEndpoint = apiUrl + 'blogs';
  const [userTokenDecoded, setUserTokenDecoded] = useState({ email: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      console.log(`decoded email in useEffect block:`, decoded.email);
      setUserTokenDecoded(decoded);
    }
  }, []);

  const date = useMemo(() => new Date(datePosted), [datePosted]);
  const alphabeticalDate = useMemo(() => formatDate(date), [date]);

  const updatedDate = useMemo(() => new Date(updatedAt), [updatedAt]);
  const modifiedDate = useMemo(() => formatDate(updatedDate), [updatedDate]);

  const deleteArticle = async (blogId) => {
    if (window.confirm(`Are you sure you want to delete?: ${blogId}`)) {
      try {
        await axios.delete(`${apiEndpoint}/${blogId}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') },
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
        {console.log('user token decoded object:', userTokenDecoded)}
        {user.email === userTokenDecoded.email ? (
          <React.Fragment>
            <div className='author__action'>
              <p>
                <Link to={`/update/${_id}`} className='link'>
                  <EditOutlinedIcon />
                </Link>
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
          <p>{categoryName}</p>
        </div>
        <div className='article__likes'>
          <p>updated @</p>
          <p>{modifiedDate}</p>
        </div>
      </div>
    </article>
  );
}
