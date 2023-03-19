import './App.css';
import React, { lazy, Suspense, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import Logout from './components/Logout';
import OtherProfile from './components/OtherProfile';
import NotFound from './components/NotFound';

const Header = lazy(() => import('./components/Header'));
const Aside = lazy(() => import('./components/Aside'));
const Nav = lazy(() => import('./components/Nav'));
const Section = lazy(() => import('./components/Section'));
const Main = lazy(() => import('./components/Main'));
const BlogInputForm = lazy(() => import('./components/BlogInputForm'));
const LoginForm = lazy(() => import('./components/LoginForm'));
const RegisterForm = lazy(() => import('./components/RegisterForm'));
const UserProfile = lazy(() => import('./components/UserProfile'));

export default function App() {
  const [name, setName] = useState('');
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    try {
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
      console.log(user);
      setUserObj(user);
      setName(user.username);
    } catch (ex) {
      console.log(ex.message);
    }
  }, []);

  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Header data={userObj} />
        <div className='app__container'>
          <nav>
            <Nav />
          </nav>
          <main>
            <Section />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route
                path='/write'
                element={<BlogInputForm userObj={userObj} />}
              />
              <Route
                path='/profile'
                element={<UserProfile userObj={userObj} />}
              />
              <Route path='/user/:username' element={<OtherProfile />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <aside>
            <Aside name={name} />
          </aside>
        </div>
      </Suspense>
    </div>
  );
}
