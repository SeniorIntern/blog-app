import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Form.css';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/users';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // prevent default form submission

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
          // navigateTo('/');
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='text'
          name='userDesc'
          placeholder='Short Description About YourSelf.'
          value={userDesc}
          onChange={(e) => setUserDesc(e.target.value)}
        />
        <input
          type='text'
          name='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          name='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' type='submit'>
          Sign Up
        </button>
      </form>
      <h3>
        Already Joined?
        <Link to='/login'>
          <button className='btn'>Sign In</button>
        </Link>
      </h3>
    </div>
  );
}
