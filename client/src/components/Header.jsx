import logo from '../assets/icons/mono.png';
import '../styles/Header.css';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link, Route, Routes } from 'react-router-dom';
import sponge from '../assets/img/sponge.jpeg';
import React from 'react';

export default function Header({ data }) {
  return (
    <header className='header'>
      <div className='left'>
        <Link to='/'>
          <img src={logo} alt='blog app' />
        </Link>
      </div>
      <div className='center'>
        <input type='text' placeholder="Search for people's posts" />
      </div>
      <div className='right'>
        <p>
          <DarkModeOutlinedIcon />
        </p>

        {data.username ? (
          <React.Fragment>
            <p>
              <Link to='write'>
                <button className='btn'>Write</button>
              </Link>
            </p>
            <p>
              <Link to='/profile'>{data.username}</Link>
            </p>
            <p>
              <Link to='/logout'>
                <button className='btn'>Logout</button>
              </Link>
            </p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>
              <Link to='/login'>
                <button className='btn'>LogIn</button>
              </Link>
            </p>
            <p>
              <Link to='/register'>
                <button className='btn'>Register</button>
              </Link>
            </p>
          </React.Fragment>
        )}
      </div>
    </header>
  );
}
