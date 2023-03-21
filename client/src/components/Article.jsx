import React, { useMemo } from 'react';
import dummyImg from '../assets/img/programming.avif';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../styles/Article.css';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Article({
  _id,
  title,
  description,
  user,
  datePosted,
  category,
  updatedAt,
}) {
  const apiEndpoint = apiUrl + 'blogs';
  let userTokenUnDecoded = '';
  let userTokenDecode = { email: '0@gmail.com' };

  if (localStorage.getItem('token')) {
    console.log(`Token from Local Storage: ${localStorage.getItem('token')}`);

    userTokenUnDecoded = localStorage.getItem('token');
    userTokenDecode = jwtDecode(userTokenUnDecoded);
  }

  const date = useMemo(() => new Date(datePosted), [datePosted]);
  const year = useMemo(() => date.getFullYear().toString().slice(-2), [date]);
  const month = useMemo(
    () => date.toLocaleString('default', { month: 'long' }),
    [date]
  );
  const day = useMemo(() => date.getDate().toString(), [date]);
  const alphabeticalDate = `${year} ${month} ${day}`;

  const updatedDate = useMemo(() => new Date(updatedAt), [updatedAt]);
  const updatedYear = useMemo(
    () => updatedDate.getFullYear().toString().slice(-2),
    [updatedDate]
  );
  const updatedMonth = useMemo(
    () => updatedDate.toLocaleString('default', { month: 'long' }),
    [updatedDate]
  );
  const updatedDay = useMemo(() => date.getDate().toString(), [date]);
  const modifiedDate = `${updatedYear} ${updatedMonth} ${updatedDay}`;

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
          <p>{category.categoryName}</p>
        </div>
        <div className='article__likes'>
          <p>updated @</p>
          <p>{modifiedDate}</p>
        </div>
      </div>
    </article>
  );
}
