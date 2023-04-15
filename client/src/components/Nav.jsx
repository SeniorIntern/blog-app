import { useEffect, useState } from 'react';
import { apiUrl } from '../config.json';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  const apiEndpoint = apiUrl + 'challenges/';
  const [challenges, setChallenges] = useState([]);
  console.log(apiEndpoint);

  useEffect(() => {
    const getChallenges = async () => {
      const response = await fetch(apiEndpoint);
      setChallenges(await response.json());
    };
    getChallenges();
  }, []);

  return (
    <nav className='nav'>
      <h3>
        Blog Challenges <TipsAndUpdatesOutlinedIcon />
      </h3>
      <div className='challenges'>
        {challenges.map((challenge) => {
          return (
            <div key={challenge._id} className='challenge'>
              <h1>
                <u>{challenge.title}</u>
              </h1>
              <p> {challenge.description} </p>
            </div>
          );
        })}
      </div>
      <div className='add__challenge'>
        <Link to='/addChallenge' className='link'>
          <button className='btn middle'>Add New</button>
        </Link>
      </div>
    </nav>
  );
}
