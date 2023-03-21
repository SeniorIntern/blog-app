import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../config.json';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import '../styles/Header.css';

export default function Header({ data }) {
  const apiEndpoint = apiUrl + 'users';
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUserSearch = async () => {
    try {
      const response = await fetch(`${apiEndpoint}/${username}`);
      const user = await response.json();
      if (user == '') window.alert('User Not Found.');
      else {
        window.location = `/user/${user[0].username}`;
        console.log(user);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <header className='header'>
      <div className='left'>
        <Link to='/'>
          <picture>
            <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
              <rect fill='#000' />
              <text
                x='50'
                y='60'
                textAnchor='middle'
                fill='#fff'
                fontFamily='Poppins'
              >
                Blog App
              </text>
            </svg>
          </picture>
        </Link>
      </div>
      <div className='center find'>
        <input
          type='text'
          value={username}
          onChange={handleInputChange}
          placeholder="Search for people's posts"
        />
        <button onClick={handleUserSearch} className='btn findIco'>
          <PersonSearchOutlinedIcon />
        </button>
      </div>
      <div className='right'>
        {data.username ? (
          <React.Fragment>
            <p>
              <Link to='write'>
                <button className='btn'>Write</button>
              </Link>
            </p>
            <p>
              <Link className='username' to='/profile'>
                {data.username}
              </Link>
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
