import React from 'react'
import '../styles/Article.css'
import hookIcon from '../assets/images/hooks.png'

export default function Article() {
    return (
        <div className='article'>
            <div className='article__author'>
                <span>
                    <p>Nikhil Thapa</p>
                    <h5>Feb 8, 2023</h5>
                </span>
                <span>Bookmark</span>
            </div>
            <div className='article__contents'>
                <div className='article__description'>
                    <a>
                        <h2>Hooks and its implementation in React app</h2>
                        <h5>
                            Hooks are a new addition in React 16.8. They let you
                            use state and other React features without writing a
                            class. This new function useState is the first
                            “Hook” we’ll learn about, but this example is just a
                            teaser. Don’t worry if it doesn’t make sense yet!
                        </h5>
                    </a>
                </div>
                <div className='article__image'>
                    <img src={hookIcon} alt='react hook' />
                </div>
            </div>
            <div className='article__details'>
                <span>
                    <b>#JavaScript</b>
                    <b>#react</b>
                </span>
                <span>
                    <p>❤124</p>
                    <p>💌12</p>
                    <p>🔄23</p>
                </span>
            </div>
        </div>
    )
}
