import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Form.css';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + 'auth/';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateTo = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault(); // prevent default form submission

    axios
      .post(apiEndpoint, {
        email: email,
        password: password,
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.data);
        console.table(data.data);
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
        // window.location = '/';
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
        onSubmit={handleSignIn}
      >
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
          LOGIN
        </button>
      </form>
      <h3>
        New User?
        <Link to='/register'>
          <button className='btn'>Join Us</button>
        </Link>
      </h3>
    </div>
  );
}
