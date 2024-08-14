import React, { useState } from 'react';
import '../components/Navbar.css'
import'../style/allcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import LoginForm from '../components/LoginForm'
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleClose = () => {
    setShowLogin(false);
  };
  return (
    <div className="navbar">
      <div>
        <nav className="fnav">
          <div className="left">
            <img src="logo-no-background.png" alt="logo" />
            <div className="inp">
              <FontAwesomeIcon icon={faSearch} id="icon" />

              <input
                type="text"
                placeholder=" Search for Movies, Events, Plays, Sports and Activaties"
              />
            </div>
          </div>
          <div className="right">
            <p>Location</p>
            <button onClick={handleLoginClick}>Sign In</button>
            {showLogin && <LoginForm handleClose={handleClose} />}
            <i className="fa-solid fa-bars" />
          </div>
        </nav>
        <nav className="sec-nav">
          <div className="s-left">
            <a href="/movie">Movies</a>
            <a href="/stream">Stream</a>
            <a href="/stream">Events</a>
            <a href="/stream">Plays</a>
            <a href="/stream">Activities</a>
            <a href="/stream">Buzz</a>
          </div>
          <div className="s-right">
            <p>ListYourShow</p>
            <p>Corporates</p>
            <p>Offer</p>
            <p>Gift Cards</p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar
