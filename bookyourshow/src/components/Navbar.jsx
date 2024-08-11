import React from 'react'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div>
  <nav className="fnav">
    <div className="left">
      <img src="logo-no-background.png" alt />
      <div className="inp">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder=" Search for Movies, Events, Plays, Sports and Activaties" />
      </div>
    </div>
    <div className="right">
      <p>Location</p>
      <button>Sign in</button>
      <i className="fa-solid fa-bars" />
    </div>
  </nav>
  <nav className="sec-nav">
    <div className="s-left">
      <p>Movies</p>
      <p>Stream</p>
      <p>Events</p>
      <p>Plays</p>
      <p>Sports</p>
      <p>Activaties</p>
      <p>Buzz</p>
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
  )
}

export default Navbar
