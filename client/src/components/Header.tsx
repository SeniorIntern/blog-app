import React from 'react'
import '../styles/Header.css'
import blogApp from '../assets/images/blogApp.svg'

export default function Header() {
    return (
        <div className='Header'>
            <div className='header__logo'>
                <a style={{ display: 'block' }}>
                    <img src={blogApp} alt='header logo' />
                </a>
            </div>
            <div className='header__input'>
                <input type='text' placeholder='Search for tags' />
            </div>
            <div className='header__options'></div>
        </div>
    )
}
