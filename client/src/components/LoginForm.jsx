import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Form.css';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + 'auth/';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    axios
      .post(apiEndpoint, {
        email: email,
        password: password,
      })
      .then((data) => {
        localStorage.setItem('token', data.data);
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
        window.location = '/';
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
          required={true}
          minLength={7}
          maxLength={32}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' type='submit'>
          LOGIN
        </button>
      </form>
      <h4>
        New User?
        <Link to='/register'>
          <button className='btn'>Join Us</button>
        </Link>
      </h4>
    </div>
  );
}
