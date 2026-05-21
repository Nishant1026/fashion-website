import React from 'react'
import './footer.css'

// social icons
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa'

import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className='footer'>

      {/* TOP */}
      <div className='footer-top'>

        {/* BRAND */}
        <div className='footer-brand'>
          <h1>Fashion</h1>
          <p>
            Premium fashion experience crafted for modern luxury lovers.
            Discover timeless collections with elegance and style.
          </p>
        </div>

        {/* LINKS */}
        <div className='footer-links'>
          <h3>Quick Links</h3>
          <a href='/'>Home</a>
          <a href='/shop'>Shop</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
        </div>

        {/* COLLECTION */}
        <div className='footer-links'>
          <h3>Collections</h3>
          <a href='/'>Men Fashion</a>
          <a href='/'>Women Fashion</a>
          <a href='/'>Accessories</a>
          <a href='/'>Luxury Wear</a>
        </div>

        {/* NEWSLETTER */}
        <div className='footer-newsletter'>
          <h3>Newsletter</h3>
          <p>Subscribe for latest arrivals and exclusive offers.</p>

          <form>
            <input type='email' placeholder='Enter your email' />
            <button type='submit'>Subscribe</button>
          </form>
        </div>

      </div>

      {/* BOTTOM */}
      <div className='footer-bottom'>
        <p>© 2026 Luxe Fashion. All Rights Reserved.</p>

        <div className='footer-socials'>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'>
            <FaInstagram />
          </a>

          <a href='https://facebook.com' target='_blank' rel='noreferrer'>
            <FaFacebookF />
          </a>

        <a href='https://x.com' target='_blank' rel='noreferrer'>
         <FaXTwitter />
        </a>

          <a href='https://youtube.com' target='_blank' rel='noreferrer'>
            <FaYoutube />
          </a>

          <a href='https://whatsapp.com' target='_blank' rel='noreferrer'>
           <FaWhatsapp />
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer