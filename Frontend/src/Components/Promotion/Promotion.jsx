import React from 'react';
import './Promotion.css';
import BurgerImage from '../../assets/Promotion1.png';

const Banner = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1><span className="highlight">Spicy</span> Delicious<br />BURGER</h1>
          <p className="subheading">This Weekend Only</p>
          <p className="description">Try our new spicy burger with jalapeños, pepper jack cheese, and chipotle mayo. It's got a kick, but trust us—you'll love it.</p>
          <button className="order-button" onClick={scrollToMenu}>Order Now</button>
        </div>
        <div className="banner-image">
          <img src={BurgerImage} alt="Spicy Burger Special" />
          <div className="offer-tag">
            <span>Up to</span>
            <span className="discount">50% OFF</span>
          </div>
          <div className="home-delivery">
            <span>24/7</span>
            <span>Home Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
