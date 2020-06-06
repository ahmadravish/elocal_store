import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Header() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} className='logo' />
          </Link>
        </div>
        <ul className='nav-links show-nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
          </li>
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link to='/'>Myorders</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
