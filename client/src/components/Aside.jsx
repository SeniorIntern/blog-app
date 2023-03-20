import React from 'react';
import '../styles/Aside.css';

export default function Aside({ name }) {
  return (
    <aside className='aside'>
      {name ? (
        <React.Fragment>
          <h3>Hello {name.toUpperCase()}</h3>

          <h2></h2>
          <div className='recent__articles'>
            <h3>
              <u>Recent Blog Posts</u>
            </h3>
            <ul></ul>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </aside>
  );
}
