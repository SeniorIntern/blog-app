import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiUrl } from '../config.json';

export default function Challenges() {
  useEffect(() => {
    if (!localStorage.getItem('token')) window.location = '/';
  }, []);
  const token = localStorage.getItem('token');
  console.log(`Token from Challenge Form ${token}`);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const apiEndpoint = apiUrl + `challenges/`;
  console.log(apiEndpoint);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        apiEndpoint,
        {
          title: title,
          description: description,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      )
      .then(() => {
        setTimeout(() => {
          window.location = '/';
        }, 1000);
      })
      .catch((error) => {
        window.alert('Only admin is allowed to post challenge.');
        console.log(error.message);
      });
  };

  return (
    <div className='InputForm'>
      <form
        className='form'
        action='apiEndpoint'
        method='post'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Challenge Title'
          value={title}
          required={true}
          minLength={3}
          maxLength={30}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type='text'
          rows='10'
          placeholder='Challenge Description'
          value={description}
          required={true}
          minLength={6}
          maxLength={150}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className='btn' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}
