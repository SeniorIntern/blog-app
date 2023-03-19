import '../styles/Section.css';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import sponge from '../assets/img/sponge.jpeg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Section() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(`http://127.0.0.1:3000/api/users/`);
      setUsers(await response.json());
    };
    getArticles();
  }, []);

  return (
    <section className='section'>
      <span className='users__list'>
        {users.map((user) => (
          <figure className='figure' key={user._id}>
            <Link to={`/user/${user.username}`}>
              <figcaption>{user.username}</figcaption>
              <img
                src={sponge}
                className='round__corners'
                alt={user.username}
              />
            </Link>
          </figure>
        ))}
      </span>
    </section>
  );
}
