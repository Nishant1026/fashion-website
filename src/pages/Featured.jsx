import React, { useRef, useEffect } from 'react'
import './featured.css'

function Featured() {

  const scrollRef = useRef(null)

  // BUTTON SCROLL

  const scrollLeft = () => {

    scrollRef.current.scrollBy({
      left: -350,
      behavior: 'smooth',
    })

  }

  const scrollRight = () => {

    scrollRef.current.scrollBy({
      left: 350,
      behavior: 'smooth',
    })

  }

  // DRAG SCROLL FOR DESKTOP

  useEffect(() => {

    const slider = scrollRef.current

    let isDown = false
    let startX
    let scrollLeftValue

    const handleMouseDown = (e) => {

      isDown = true

      slider.classList.add('dragging')

      startX = e.pageX - slider.offsetLeft
      scrollLeftValue = slider.scrollLeft

    }

    const handleMouseLeave = () => {

      isDown = false

      slider.classList.remove('dragging')

    }

    const handleMouseUp = () => {

      isDown = false

      slider.classList.remove('dragging')

    }

    const handleMouseMove = (e) => {

      if (!isDown) return

      e.preventDefault()

      const x = e.pageX - slider.offsetLeft

      const walk = (x - startX) * 2

      slider.scrollLeft = scrollLeftValue - walk

    }

    slider.addEventListener('mousedown', handleMouseDown)
    slider.addEventListener('mouseleave', handleMouseLeave)
    slider.addEventListener('mouseup', handleMouseUp)
    slider.addEventListener('mousemove', handleMouseMove)

    return () => {

      slider.removeEventListener('mousedown', handleMouseDown)
      slider.removeEventListener('mouseleave', handleMouseLeave)
      slider.removeEventListener('mouseup', handleMouseUp)
      slider.removeEventListener('mousemove', handleMouseMove)

    }

  }, [])

  // PRODUCTS

  const products = [

    {
      id: 1,
      name: 'Luxury Black Suit',
      category: 'Men Fashion',
      price: '$180',
      image:
        'https://images.unsplash.com/photo-1750741268857-7e44510f867d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsYWNrJTIwc3VpdCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    },

    {
      id: 2,
      name: 'Elegant Beige Dress',
      category: 'Women Fashion',
      price: '$150',
      image:
        'https://images.openai.com/static-rsc-4/fyYUnapyVvNSFbbdWD7y9rwGxWrkzRZusl3BNsrHAr1wv-2D4JsluXhXRVkKdECuXnSywwiJGjsEzk4xblbRTFEaswABITcJLzSnj0wOXMuDZZ-q_pckePKMjPxJYYNZL80SHUGsy3tHc7CYEzkH9DtKOLL5WukrRUSFweMfYECBStAu10nGLV9Hi9jpS8qZ?purpose=fullsize',
    },

    {
      id: 3,
      name: 'Premium Sneakers',
      category: 'Footwear',
      price: '$120',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80&utm_source=chatgpt.com',
    },

    {
      id: 4,
      name: 'Luxury Watch',
      category: 'Accessories',
      price: '$240',
      image:
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: 5,
      name: 'Classic White Shirt',
      category: 'Trending',
      price: '$95',
      image:
        'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop',
    },

  ]

  return (

    <section className='featured'>

      {/* TOP */}

      <div className='featured-top'>

        <p className='featured-subtitle'>
          TRENDING PRODUCTS
        </p>

        <h1>
          Featured Fashion
        </h1>

        <span className='featured-line'></span>

      </div>

      {/* BUTTONS */}

      <div className='featured-buttons'>

        {/* <button onClick={scrollLeft}>
          &lt;
        </button>

        <button onClick={scrollRight}>
          &gt;
        </button> */}

      </div>

      {/* SLIDER */}

      <div
        className='featured-slider'
        ref={scrollRef}
      >

        {products.map((item) => (

          <div
            className='featured-card'
            key={item.id}
          >

            {/* IMAGE */}

            <div className='featured-image'>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className='featured-overlay'></div>

            </div>

            {/* CONTENT */}

            <div className='featured-content'>

              <span>
                {item.category}
              </span>

              <h2>
                {item.name}
              </h2>

              <div className='featured-bottom'>

                <p>
                  {item.price}
                </p>

                <button>
                  Add To Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Featured