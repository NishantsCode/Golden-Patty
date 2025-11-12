import React from 'react';
import './Menu.css';

import Burger1 from '../../assets/burger1.jpg';
import Burger2 from '../../assets/burger2.jpg';
import Burger3 from '../../assets/burger3.jpg';
import Burger4 from '../../assets/burger4.jpg';
import Burger5 from '../../assets/burger5.jpg';

const Menu = ({ onAddToCart }) => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      image: Burger1,
      price: 249,
      description: "Sometimes simple is best. Juicy beef patty, melted cheddar, crisp lettuce, and our house sauce on a toasted bun."
    },
    {
      id: 2,
      name: "Double Decker",
      image: Burger2,
      price: 349,
      description: "For when you're really hungry. Two beef patties, double cheese, fresh veggies, and our secret sauce."
    },
    {
      id: 3,
      name: "BBQ Bacon Burger",
      image: Burger3,
      price: 299,
      description: "Smoky BBQ sauce, crispy bacon, sharp cheddar, and caramelized onions. A crowd favorite."
    },
    {
      id: 4,
      name: "Truffle Burger",
      image: Burger4,
      price: 449,
      description: "Our fancy option. Premium beef with truffle aioli, Swiss cheese, and fresh arugula."
    },
    {
      id: 5,
      name: "Mediterranean Burger",
      image: Burger5,
      price: 329,
      description: "A lighter take with feta cheese, kalamata olives, cucumber, and homemade tzatziki."
    }
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">What We're Serving</h2>
        <p className="section-subtitle">Every burger is made fresh when you order. Pick your favorite or try something new.</p>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-card-overlay">
                  <button 
                    className="btn add-to-cart-btn"
                    onClick={() => onAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-card-footer">
                  <span className="price">₹{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
