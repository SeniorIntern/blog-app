import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Nav from './components/Nav';
import Section from './components/Section';
import Main from './components/Main';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__container">
        <nav>
          <Nav />
        </nav>
        <main>
          <Section />
          <Main />
        </main>
        <aside>
          <Aside />
        </aside>
      </div>
    </div>
  );
}
