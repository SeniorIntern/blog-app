// import logo from "../assets/icons/logo-standard.png"
import logo from "../assets/icons/mono.png"
import "../styles/Header.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
    return(
        <header className="header">
            <div className="left">
                <img src={logo} alt="blog app"  />
            </div>
            <div className="center">
                <input type="text" placeholder="Search for people's posts"/>
            </div>
            <div className="right">
                <span>Write</span>
                <NotificationsNoneIcon style={{ color: '#6b788c', fontSize:'1.6rem' }}/>
                <WbSunnyIcon style={{ color: '#6b788c', fontSize:'1.6rem' }}/>
                <AccountCircleIcon style={{ color: '#6b788c', fontSize:'1.6rem' }}/>
            </div>
        </header>
    )
}