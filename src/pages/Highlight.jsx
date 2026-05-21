import React from 'react'
import './highlight.css'

function Highlight() {

  const categories = [
    {
      id: 1,
      title: 'Men Collection',
      subtitle: 'Luxury Streetwear',
      image:
        'https://media.istockphoto.com/id/170091120/photo/clothes-in-shop.jpg?s=612x612&w=0&k=20&c=Gn1eH_5uB_O4VfirFLCt6XW-UYaC-FNUMcyVFRTNb60=',
    },

    {
      id: 2,
      title: 'Women Collection',
      subtitle: 'Modern Elegance',
      image:
        'https://media.istockphoto.com/id/854321536/photo/look-at-this-gorgeous-dress.jpg?s=612x612&w=0&k=20&c=UyxEiEddYEFQPAoopwYs-_8xJ5vp0vKE0Sl3GnrQpK8=',
    },

    {
      id: 3,
      title: 'Premium Shoes',
      subtitle: 'Fashion Footwear',
      image:
        'https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=',
    },

    {
      id: 4,
      title: 'Luxury Accessories',
      subtitle: 'Timeless Details',
      image:
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section className='highlight'>

      {/* TOP CONTENT */}

      <div className='highlight-top'>

        <p className='highlight-subtitle'>
          CURATED FASHION COLLECTIONS
        </p>

        <h1>
          Discover Luxury <br />
          Fashion Categories
        </h1>

        <span className='highlight-line'></span>

      </div>

      {/* CATEGORY GRID */}

      <div className='highlight-container'>

        {categories.map((item) => (

          <a
            href='#'
            className='highlight-card'
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className='highlight-overlay'></div>

            <div className='highlight-content'>

              <span>{item.subtitle}</span>

              <h2>{item.title}</h2>

              <button>
                View Collection
              </button>

            </div>

          </a>

        ))}

      </div>

    </section>
  )
}

export default Highlight