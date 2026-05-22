import React from 'react'
import './women.css'

function Women() {
  const categories = [
    { id: 1, title: 'Luxury Dresses', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2000&auto=format&fit=crophttps://media.istockphoto.com/id/1050413472/photo/happy-young-woman-trying-on-various-brand-jackets-in-the-shopping-mall.jpg?q=80&w=2000&auto=format&fit=crop	https://media.istockphoto.com/id/854321536/photo/l…20&c=Tl4ClVJEvyU3lO1iGzQT11t5N2nrBPKIBYLAkqWzAqg=' },
    { id: 2, title: 'Designer Bags', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Premium Heels', image: 'https://images.unsplash.com/photo-1585386959984-a415522b7e53?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Luxury Jewelry', image: 'https://images.unsplash.com/photo-1518544802485-8ed2f3b0d0d9?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, title: 'Beauty Collection', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'Winter Collection', image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1600&auto=format&fit=crop' },
  ]

  const products = [
    { id: 1, name: 'Aurelia Silk Gown', price: '$1,250', image: 'https://images.unsplash.com/photo-1520975910581-3b1a4f4b1c70?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, name: 'Saint Laurent Clutch', price: '$980', image: 'https://images.unsplash.com/photo-1522336572468-97b6b0c6a0d8?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, name: 'Emilia Strappy Heels', price: '$420', image: 'https://images.unsplash.com/photo-1519741490978-4b07c0d7a91a?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, name: 'Valentina Diamond Set', price: '$3,600', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1200&auto=format&fit=crop' },
    { id: 5, name: 'Nocturne Perfume', price: '$150', image: 'https://images.unsplash.com/photo-1515514759711-1a0f5d3b6d89?q=80&w=1200&auto=format&fit=crop' },
    { id: 6, name: 'Auric Satchel', price: '$860', image: 'https://images.unsplash.com/photo-1503342452485-86a6f4db1a9e?q=80&w=1200&auto=format&fit=crop' },
    { id: 7, name: 'Luna Cashmere Coat', price: '$1,450', image: 'https://images.unsplash.com/photo-1542060748-6a9b1c1f9b0a?q=80&w=1200&auto=format&fit=crop' },
    { id: 8, name: 'Monroe Gold Hoop', price: '$220', image: 'https://images.unsplash.com/photo-1502810190503-830027b24b98?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <main className='women-page'>

      <section className='women-hero'>
        <div className='hero-inner'>
          <div className='hero-copy'>
            <p className='eyebrow'>THE LUXE EDITION</p>
            <h1 className='hero-title'>Timeless Elegance — Curated For Night</h1>
            <p className='hero-sub'>Seasonless silhouettes, artisanal fabrics, and exquisite detail.</p>
            <div className='hero-cta'>
              <a href='#categories' className='btn btn-gold'>Explore Collections</a>
            </div>
          </div>
          <div className='hero-media' role='img' aria-label='Luxury model'>
            <img src='https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww' alt='Luxury model' />
          </div>
        </div>
      </section>

      <section id='categories' className='women-categories'>
        <h2 className='section-title'>Luxury Categories</h2>
        <p className='section-sub'>Curated selections across couture, accessories and lifestyle</p>
        <div className='categories-grid'>
          {categories.map((c) => (
            <article key={c.id} className='cat-card'>
              <div className='cat-media'>
                <img src={c.image} alt={c.title} />
                <div className='cat-overlay'></div>
              </div>
              <div className='cat-copy'>
                <h3>{c.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='women-products'>
        <div className='section-head'>
          <h2 className='section-title'>Trending Now</h2>
          <p className='section-sub'>Exclusive pieces selected by our atelier</p>
        </div>

        <div className='products-grid'>
          {products.map((p) => (
            <article className='product-card' key={p.id}>
              <div className='product-media'>
                <img src={p.image} alt={p.name} />
                <button className='wish-btn' aria-label='Add to wishlist'>
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 21s-7-4.35-9.5-7.03C-0.25 10.45 3 6 7.5 6c2.24 0 3.5 1.2 4.5 2.3C13 7.2 14.25 6 16.5 6 21 6 24.25 10.45 21.5 13.97 19 16.65 12 21 12 21z' stroke='gold' strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round'/></svg>
                </button>
              </div>
              <div className='product-copy'>
                <h3>{p.name}</h3>
                <p className='price'>{p.price}</p>
                <button className='btn btn-outline'>Add to Cart</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='women-banner'>
        <div className='banner-inner'>
          <h2>Autumn Couture — Limited Editions</h2>
          <p>Discover pieces with exclusive craftsmanship. Up to 40% off selected items.</p>
          <a className='btn btn-gold' href='#'>Shop the Drop</a>
        </div>
      </section>

      <section className='women-collections'>
        <h2 className='section-title'>Featured Collections</h2>
        <div className='collections-grid'>
          <div className='collection-card'><img src='https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop' alt='Evening Wear' /><div className='collection-overlay'></div><h3>Evening Wear</h3></div>
          <div className='collection-card'><img src='https://images.unsplash.com/photo-1520975910581-3b1a4f4b1c70?q=80&w=1200&auto=format&fit=crop' alt='Streetwear' /><div className='collection-overlay'></div><h3>Luxury Streetwear</h3></div>
          <div className='collection-card'><img src='https://images.unsplash.com/photo-1522336572468-97b6b0c6a0d8?q=80&w=1200&auto=format&fit=crop' alt='Accessories' /><div className='collection-overlay'></div><h3>Premium Accessories</h3></div>
          <div className='collection-card'><img src='https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop' alt='Modern Minimal' /><div className='collection-overlay'></div><h3>Modern Minimal</h3></div>
        </div>
      </section>

      <section className='women-testimonials'>
        <h2 className='section-title'>What Our Clients Say</h2>
        <div className='testimonials-grid'>
          <blockquote className='test-card'>
            <div className='client'><img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' alt='client' /><cite>Isabella R.</cite></div>
            <p>"The craftsmanship and attention to detail is unparalleled. A wardrobe investment."</p>
          </blockquote>
          <blockquote className='test-card'>
            <div className='client'><img src='https://images.unsplash.com/photo-1545996124-1b8cd5a9d44f?q=80&w=200&auto=format&fit=crop' alt='client' /><cite>Marc D.</cite></div>
            <p>"Exceptional pieces, luxurious fabrics — the perfect balance of modern and timeless."</p>
          </blockquote>
          <blockquote className='test-card'>
            <div className='client'><img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop' alt='client' /><cite>Olivia S.</cite></div>
            <p>"Elegance and subtlety. The collection makes evening dressing effortless."</p>
          </blockquote>
        </div>
      </section>

      <section className='women-newsletter'>
        <div className='newsletter-inner'>
          <h3>Subscribe for Private Previews</h3>
          <p>Receive early access to limited drops and atelier events.</p>
          <form className='subscribe-form' onSubmit={(e)=>e.preventDefault()}>
            <input type='email' placeholder='Email address' aria-label='Email address' />
            <button className='btn btn-gold' type='submit'>Subscribe</button>
          </form>
        </div>
      </section>

      <section className='women-gallery'>
        <h2 className='section-title'>From Our Atelier — Instagram</h2>
        <div className='gallery-grid'>
          {Array.from({length:8}).map((_,i)=> (
            <div className='gallery-item' key={i}><img src={`https://images.unsplash.com/photo-1520975910581-3b1a4f4b1c70?q=80&w=800&auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxzZWFyY2h8${20+i}` } alt='fashion' /></div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Women