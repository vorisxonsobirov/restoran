import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import '../navbar/navbar.css';
import logo from '../../assets/ззззззззззззззззз.png';
import line from '../../assets/Vector 5.png';


const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <nav className="nav_logo">
          <img src={logo} alt="" />
        </nav>
        <nav className="nav_link">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/pages">
              <li>Menu</li>
            </Link>
            <Link to="/menu">
              <li>Contact</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <div>
              <Link to={'/card'} className='button' href='#'>
                Каризина
              </Link>
            </div>
          </ul>
        </nav>
        <nav className="nav_link navlink_none">
          <ul>
            <li>
              <a href="#" onClick={handleLoginToggle}>
                Log in / registration
              </a>
            </li>
            <img src={line} alt="" />
            <li>
              <Link to="/book">
                <a href="">book table</a>
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
      {showLogin && <Login />}
    </div>
  );
};

export default Navbar;
