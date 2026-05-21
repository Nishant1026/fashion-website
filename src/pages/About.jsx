import React from 'react'
import './about.css'

function About() {
  return (
    <section className='about'>

      <div className='about-container'>

        {/* LEFT SIDE IMAGES */}
        <div className='about-images'>

          <div className='image-box image-large'>
            <img
              src='https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop'
              alt='Luxury Fashion'
            />
          </div>

          <div className='image-box image-small'>
            <img
              src='https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop'
              alt='Premium Style'
            />
          </div>

          {/* EXPERIENCE CARD */}
          <div className='experience-card'>
            <h2>12+</h2>
            <span>Years Of Luxury Fashion</span>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className='about-content'>

          <p className='section-subtitle'>
            PREMIUM FASHION HOUSE
          </p>

          <h1>
            Crafted For Those <br />
            Who Define Elegance
          </h1>

          <span className='about-line'></span>

          <h4>
            We create timeless fashion experiences with premium
            fabrics, elevated silhouettes, and modern luxury aesthetics.
          </h4>

          <p className='about-description'>
            Our collections are designed to blend sophistication with
            contemporary trends, offering exclusive pieces that
            express confidence, prestige, and individuality.
            Every design reflects craftsmanship, detail, and luxury.
          </p>

          {/* FEATURES */}
          <div className='about-features'>

            <div className='feature-card'>
              <h3>Premium Fabrics</h3>
              <p>Luxury materials with unmatched comfort.</p>
            </div>

            <div className='feature-card'>
              <h3>Exclusive Designs</h3>
              <p>Modern silhouettes with timeless appeal.</p>
            </div>

          </div>

          {/* BUTTON */}
          <button className='about-btn'>
            Discover Collection
          </button>

        </div>

      </div>

    </section>
  )
}

export default About