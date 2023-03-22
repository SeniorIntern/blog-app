import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiUrl } from '../config.json';
import '../styles/BlogInputForm.css';

export default function BlogInputForm({ userObj }) {
  useEffect(() => {
    if (!localStorage.getItem('token')) window.location = '/';
  }, []);

  const apiEndpoint = apiUrl + `blogs/`;
  const apiCategoriesEndpoint = apiUrl + `categories/`;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  const token = localStorage.getItem('token');
  console.log(`Token from BlogInputForm ${token}`);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(apiCategoriesEndpoint);
        setCategories(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        apiEndpoint,
        {
          title: title,
          description: description,
          userId: userObj._id,
          categoryId: categoryId,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      )
      .then(() => {
        window.location = '/';
      })
      .catch((error) => {
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
          value={title}
          type='text'
          placeholder='Blog Title...'
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value=''>Select a Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <textarea
          type='text'
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
