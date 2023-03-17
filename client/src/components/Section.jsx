import '../styles/Section.css';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import sponge from '../assets/img/sponge.jpeg';

export default function Section() {
  return (
    <section className='section'>
      <figure className='figure'>
        <img
          src={sponge}
          className='round__corners'
          alt='sponge bob square pants'
        />
        <img
          src={sponge}
          className='round__corners'
          alt='sponge bob square pants'
        />
        <img
          src={sponge}
          className='round__corners'
          alt='sponge bob square pants'
        />
        <img
          src={sponge}
          className='round__corners'
          alt='sponge bob square pants'
        />
      </figure>
    </section>
  );
}
