import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>

          {/* LOGO */}
          <div className='logo'>
            <span>F</span>
            <span>A</span>
            <span>S</span>
            <span>H</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </div>

          {/* NAV LINKS */}
          <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/women">Women</Link>
            </li>

            <li>
              <Link to="/men">Men</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/collection">Collection</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            {/* MOBILE BUTTONS */}
            <li className='mobile-buttons'>
              <button className='login-btn mobile-login-btn'>
                Login
              </button>

              <button className='cart-btn mobile-cart-btn'>
                Cart
              </button>
            </li>
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className='nav-icons'>
            <button className='login-btn'>Login</button>
            <button className='cart-btn'>Cart</button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={menuOpen ? 'hamburger active' : 'hamburger'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Nav