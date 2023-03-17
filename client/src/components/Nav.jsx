import '../styles/Nav.css';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <ArticleOutlinedIcon />
          My Feed
        </li>
        <li>
          <ExploreOutlinedIcon />
          Explore
        </li>
        <li>
          <ClassOutlinedIcon />
          Bookmarks
        </li>
        <li>
          <EmojiEventsOutlinedIcon />
          Events
        </li>
      </ul>
      <br />
      <h1>
        Trending Tags <TrendingUpOutlinedIcon />
      </h1>
      <br />
      <ul>
        <li>JavaScript</li>
        <li>Web Development</li>
        <li>React</li>
        <li>Python</li>
      </ul>
    </nav>
  );
}
