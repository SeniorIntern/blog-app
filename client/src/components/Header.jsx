import logo from '../assets/icons/mono.png';
import '../styles/Header.css';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="blog app" />
      </div>
      <div className="center">
        <input type="text" placeholder="Search for people's posts" />
      </div>
      <div className="right">
        <span>Write</span>
        <NotificationsNoneOutlinedIcon />
        <DarkModeOutlinedIcon />
        <PermIdentityOutlinedIcon />
      </div>
    </header>
  );
}
