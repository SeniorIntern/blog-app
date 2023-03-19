import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/BlogInputForm.css';
import { apiUrl } from '../config.json';
import { toast } from 'react-toastify';

const apiEndpoint = apiUrl + `blogs/`;

export default function BlogInputForm({ userObj }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission

    axios
      .post(apiEndpoint, {
        title: title,
        description: description,
        userId: userObj._id,
        categoryId: categoryId,
      })
      .then((data) => {
        console.log(data);
        toast.success('Your blog is posted.', {
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
    <div className='BlogInputForm'>
      <form
        className='form'
        action='apiEndpoint'
        method='post'
        onSubmit={handleSubmit}
      >
        <input
          value={title}
          type='text'
          placeholder='Blog Title...'
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={categoryId}
          type='text'
          placeholder='Category Id'
          onChange={(e) => setCategoryId(e.target.value)}
        />
        <textarea
          type='text'
          className='blog__paragraph'
          rows='10'
          value={description}
          placeholder='Blog Paragraph...'
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit' className='btn'>
          POST
        </button>
      </form>
    </div>
  );
}
