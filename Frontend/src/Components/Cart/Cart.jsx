import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity, isOpen, onClose, onOrderPlaced }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://golden-patty-backend.onrender.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          total: total,
          customer: formData
        })
      });

      if (response.ok) {
        const data = await response.json();
        setShowSuccess(true);
        
        // Store order in localStorage for My Orders section
        const existingOrders = JSON.parse(localStorage.getItem('myOrders') || '[]');
        existingOrders.push({
          ...data.order,
          orderNumber: `ORD${Date.now().toString().slice(-6)}`
        });
        localStorage.setItem('myOrders', JSON.stringify(existingOrders));
        
        if (onOrderPlaced) onOrderPlaced();
        
        setTimeout(() => {
          cartItems.forEach(item => onRemoveFromCart(item.id));
          setFormData({ name: '', phone: '', address: '', notes: '' });
          setShowCheckout(false);
          setShowSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2>{showCheckout ? 'Checkout' : 'Your Cart'}</h2>
          <button className="close-btn" onClick={() => {
            onClose();
            setShowCheckout(false);
          }}>&times;</button>
        </div>

        {!showCheckout ? (
          <>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">₹{item.price}</p>
                      <div className="quantity-controls">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button className="remove-btn" onClick={() => onRemoveFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-amount">₹{total.toFixed(0)}</span>
                </div>
                <button className="btn checkout-btn" onClick={() => setShowCheckout(true)}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="checkout-form-container">
              <form onSubmit={handleCheckout} className="checkout-form">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Rahul Sharma"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    pattern="[+]?[0-9]{10,13}"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Delivery Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Flat 301, Green Valley Apartments, Koramangala, Bangalore"
                    rows="3"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Special Instructions (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special requests? Extra cheese? No onions?"
                    rows="2"
                  />
                </div>

                <div className="order-summary">
                  <h4>Order Summary</h4>
                  {cartItems.map((item) => (
                    <div key={item.id} className="summary-item">
                      <span>{item.name} x{item.quantity}</span>
                      <span>₹{(item.price * item.quantity).toFixed(0)}</span>
                    </div>
                  ))}
                  <div className="summary-total">
                    <span>Total</span>
                    <span>₹{total.toFixed(0)}</span>
                  </div>
                </div>

                {showSuccess && (
                  <div className="success-message-box">
                    <div className="success-icon">✓</div>
                    <h3>Order Placed Successfully!</h3>
                    <p>Thanks for your order! We'll have it ready soon.</p>
                    <p className="order-info">Check "My Orders" to track your order.</p>
                  </div>
                )}

                {!showSuccess && (
                  <div className="checkout-actions">
                    <button type="button" className="btn-back" onClick={() => setShowCheckout(false)}>
                      Back to Cart
                    </button>
                    <button type="submit" className="btn checkout-btn">
                      Place Order
                    </button>
                  </div>
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
