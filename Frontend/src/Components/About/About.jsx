import React from 'react'
import './About.css'
import about_image from '../../assets/about-image3.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_image} alt="Our restaurant" className='about-image'/>
      </div>
      <div className="about-right">
        <h4>About Us</h4>
        <h3>Golden Patty</h3>
        <p>We started Golden Patty because we were tired of mediocre burgers. You know the kind—dry patties, soggy buns, toppings that slide off after one bite. We knew we could do better.</p>
        <p>So we did. Every burger we make uses fresh, quality ingredients. Our beef is never frozen, our buns are baked daily, and our toppings are prepped each morning. It's more work, sure, but it makes all the difference.</p>
        <p>Whether you're grabbing lunch on your break or bringing the family for dinner, we want you to leave happy. That's why we're here.</p>
      </div>
    </div>
  )
}

export default About
