import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Get in Touch <img src={msg_icon} alt="" /></h3>
        <p>Have questions about our menu? Want to place a bulk order for your office party? Or just want to share your feedback? We're all ears! Drop us a message and we'll get back to you within 24 hours.</p>
        
        <div className="contact-info-cards">
          <div className="info-card">
            <img src={phone_icon} alt="Phone" />
            <div>
              <h4>Call Us</h4>
              <p>+91 98765 43210</p>
              <p>+91 87654 32109</p>
            </div>
          </div>

          <div className="info-card">
            <img src={mail_icon} alt="Email" />
            <div>
              <h4>Email Us</h4>
              <p>hello@happyburger.in</p>
              <p>orders@happyburger.in</p>
            </div>
          </div>

          <div className="info-card">
            <img src={location_icon} alt="Location" />
            <div>
              <h4>Visit Us</h4>
              <p>Shop No. 45, MG Road</p>
              <p>Bangalore, Karnataka 560001</p>
            </div>
          </div>
        </div>

        <div className="business-hours">
          <h4>Business Hours</h4>
          <div className="hours-grid">
            <div>
              <span className="day">Monday - Friday</span>
              <span className="time">11:00 AM - 11:00 PM</span>
            </div>
            <div>
              <span className="day">Saturday - Sunday</span>
              <span className="time">10:00 AM - 12:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-col">
        <form onSubmit={handleSubmit}> 
          <label>Your Name</label>
          <input 
            type="text" 
            name='name' 
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your name' 
            required
          />
          
          <label>Phone Number</label>
          <input 
            type="tel" 
            name='phone' 
            value={formData.phone}
            onChange={handleChange}
            placeholder='+91 98765 43210' 
            pattern="[+]?[0-9]{10,13}"
            required 
          />
          
          <label>Your Message</label>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows="6" 
            placeholder='What would you like to tell us?' 
            required
          ></textarea>
          
          <button 
            type='submit' 
            className='btnSubmit'
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="success-message">Thanks for reaching out! We'll get back to you soon.</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
