import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/finallogo.png'
import CartIcon from '../CartIcon/CartIcon'

const Navbar = ({ cartItemCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleMyOrders = () => {
    navigate('/my-orders');
    setMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to="/">
          <img src={logo} alt="Logo" className='logo'/>
        </Link>
        <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('menu')}>Menu</li>
          <li onClick={() => scrollToSection('about')}>About Us</li>
          <li onClick={handleMyOrders}>My Orders</li>
          <li onClick={() => scrollToSection('contact')}>
            <button className='btn'>Contact Us</button>
          </li>
          <li>
            <CartIcon itemCount={cartItemCount} onClick={onCartClick} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
