import React from 'react'
import '../styles/Header.css'
import blogApp from '../assets/images/blogApp.svg'
import logo from '../assets/icons/logo.svg'
import bell from '../assets/icons/bell-notification.svg'

export default function Header() {
    return (
        <div className='Header'>
            <div className='header__left'>
                <img className='header__icon' src={logo} alt='header logo' />
            </div>
            <div className='header__center'>
                <input type='text' id='search' placeholder='Search for tags' />
            </div>
            <div className='header__right'>
                <button>Write</button>
                <img
                    src={bell}
                    id='svg-image'
                    className='header__icon'
                    alt=''
                />
            </div>
        </div>
    )
}
