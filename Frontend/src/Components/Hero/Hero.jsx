import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className='hero'>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>The Best Burgers You'll Ever Taste</h1>
          <p>We make every burger fresh to order with premium ingredients. No shortcuts, no compromises—just really good food that'll make you want to come back for more.</p>
          <button className="btn hero-btn" onClick={scrollToMenu}>Order Now</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
