import React, { useEffect, useState } from 'react';
import sponge from '../assets/img/sponge.jpeg';
import { Link } from 'react-router-dom';
import { apiUrl } from '../config.json';
import '../styles/Section.css';

export default function Section({ name }) {
  console.log(name);
  const apiEndpoint = apiUrl + 'users/';

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(apiEndpoint);
      setUsers(await response.json());
    };
    getArticles();
  }, []);

  return (
    <section className='section'>
      {name ? (
        <React.Fragment>
          <span className='users__list'>
            {users.map((user) => (
              <figure className='figure' key={user._id}>
                <Link to={`/user/${user.username}`} className='link'>
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
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className='guest__message'>
            <h2>Howdy User!!!</h2>
            <h2>Join Us to Get Access to Amazing Features</h2>
          </div>
        </React.Fragment>
      )}
    </section>
  );
}
