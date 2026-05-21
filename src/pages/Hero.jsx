import React, { useEffect, useState } from 'react'
import './hero.css'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'THE SIGNATURE EDIT',
    title: 'Refined Luxury, Reimagined',
    desc: 'Discover elevated fashion pieces designed for timeless sophistication.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'PREMIUM COUTURE STYLE',
    title: 'Where Style Meets Prestige',
    desc: 'Curated silhouettes and premium details for a polished, modern look.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'LUXURY SEASONAL DROP',
    title: 'Exceptional Fashion, Effortlessly Worn',
    desc: 'Explore exclusive collections crafted to express confidence and class.',
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(slider)
  }, [])

  return (
    <section className='hero'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? 'hero-slide active' : 'hero-slide'}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className='overlay'></div>

          <div className='hero-content'>
            <p>{slide.subtitle}</p>

            <h1>{slide.title}</h1>

            <span>{slide.desc}</span>

            <div className='hero-buttons'>
              <button className='shop-btn'>Shop the Collection</button>

              <button className='collection-btn'>Explore Luxury Edit</button>
            </div>
          </div>
        </div>
      ))}

      {/* SLIDER DOTS */}
      <div className='slider-dots'>
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active-dot' : 'dot'}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default Hero