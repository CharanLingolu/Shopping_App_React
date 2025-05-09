import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className='headerSection'>
        <div className='left'>
          <div className='title'>
            <h2>Shopping App</h2>
          </div>
        </div>
        <div className='center'>
          <ul className={menuOpen ? 'hidden' : ''}>
            <li>Women</li>
            <li>Men</li>
            <li>Children</li>
            <li>Beauty</li>
          </ul>
          <div className='toggleBtn' onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
        <div className='search'>
          <input type='text' placeholder='search...' />
        </div>
        <div className='right'>
          <div className='signin'>Signin / Signup</div>
          <div className='cart'>Cart</div>
        </div>
      </div>
      <div className={`dropdownmenu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
        <div className='signindrop'>Signin / Signup</div>
        <div className='cartdrop'>Cart</div>
      </div>
    </div>
  );
};

export default Header;