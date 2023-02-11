import './App.css'
import Aside from './components/Aside'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'

export default function App() {
    return (
        <div className='App'>
            <Header />
            <div className='app__body'>
                <Nav />
                <Main />
                <Aside />
            </div>
        </div>
    )
}
