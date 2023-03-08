import '../styles/Aside.css';

export default function Aside() {
  return (
    <aside className="aside">
      <nav className="nav">
        <ul>
          <li>My Feed</li>
          <li>Explore</li>
          <li>Bookmarks</li>
          <li></li>
        </ul>
        <br />
        <h1>Trending Tags</h1>
        <br />
        <ul>
          <li>JavaScript</li>
          <li>Web Development</li>
          <li>React</li>
          <li>Python</li>
        </ul>
      </nav>
    </aside>
  );
}
