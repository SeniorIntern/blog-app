import React from 'react';
import dummyImg from '../assets/img/programming.avif';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import '../styles/Article.css';

export default function Article() {
  return (
    <article className="article">
      <div className="article__author">
        <div className="author__name">
          <p>
            <PermIdentityOutlinedIcon /> Nikhil Thapa
          </p>
          <p>March 7, 2023</p>
        </div>
      </div>
      <div className="article__content">
        <div className="content_description">
          <h2>JavaScritp is an awesome language.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, eaque
            tempore corrupti sapiente earum totam quasi obcaecati, nisi eligendi
            ut placeat vitae quis laboriosam unde perferendis praesentium a
            inventore dolorem?
          </p>
        </div>
        <div className="article__image">
          <img src={dummyImg} alt="programming" />
        </div>
      </div>
      <div className="article__informations">
        <h5>JavaScript</h5>
        <p className="space"></p>
        <FavoriteBorderOutlinedIcon />
        <p className="likes">24</p>
      </div>
    </article>
  );
}
