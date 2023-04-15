import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config.json';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Form.css';

const apiEndpoint = apiUrl + 'users/';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post(apiEndpoint, {
        username: username,
        userDesc: userDesc,
        email: email,
        password: password,
      })
      .then((data) => {
        localStorage.setItem('token', data.headers['x-auth-token']);
        toast.success('Thank You For Joining Us. Redirecting...', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setTimeout(() => {
          window.location = '/';
        }, 1000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='form__container'>
      <ToastContainer />
      <form
        className='form'
        action='apiEndpoint'
        method='post'
        onSubmit={handleRegister}
      >
        <input
          type='text'
          name='username'
          placeholder='username'
          value={username}
          required={true}
          minLength={3}
          maxLength={32}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          name='userDesc'
          placeholder='Few Words About YourSelf.'
          value={userDesc}
          required={true}
          minLength={3}
          maxLength={32}
          onChange={(e) => setUserDesc(e.target.value)}
        />
        <input
          type='text'
          name='email'
          placeholder='email'
          value={email}
          required={true}
          minLength={10}
          maxLength={54}
          pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          required={true}
          minLength={7}
          maxLength={32}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' type='submit'>
          Sign Up
        </button>
      </form>
      <h4>
        Already Joined?
        <Link to='/login'>
          <button className='btn'>Sign In</button>
        </Link>
      </h4>
    </div>
  );
}
