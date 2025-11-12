import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadOrders = () => {
      try {
        const storedOrders = JSON.parse(localStorage.getItem('myOrders') || '[]');
        // Filter out any invalid orders (missing required fields)
        const validOrders = storedOrders.filter(order => 
          order && 
          order.items && 
          Array.isArray(order.items) && 
          order.items.length > 0
        );
        setOrders(validOrders.reverse());
      } catch (error) {
        console.error('Error loading orders:', error);
        setOrders([]);
      }
    };
    
    loadOrders();
    
    // Listen for storage changes
    window.addEventListener('storage', loadOrders);
    return () => window.removeEventListener('storage', loadOrders);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#ffc107';
      case 'preparing': return '#17a2b8';
      case 'delivered': return '#28a745';
      default: return '#6c757d';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="myorders-section">
      <div className="container">
        <h2 className="section-title">My Orders</h2>
        <p className="section-subtitle">Track your delicious burger orders</p>

        {orders.length === 0 ? (
          <div className="no-orders">
            <div className="no-orders-icon">🍔</div>
            <h3>No Orders Yet</h3>
            <p>Looks like you haven't ordered anything yet. Time to grab a burger!</p>
            <button className="btn" onClick={() => navigate('/')}>
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="orders-grid">
            {orders.map((order, index) => (
              <div key={index} className="order-card">
                <div className="order-header">
                  <div>
                    <h3>Order #{order.orderNumber}</h3>
                    <p className="order-date">{formatDate(order.createdAt)}</p>
                  </div>
                  <span 
                    className="order-status"
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>

                <div className="order-items">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <span className="item-price">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                {order.customer && (
                  <div className="order-customer">
                    <div className="customer-info">
                      <p><strong>Name:</strong> {order.customer.name}</p>
                      <p><strong>Phone:</strong> {order.customer.phone}</p>
                      <p><strong>Address:</strong> {order.customer.address}</p>
                      {order.customer.notes && (
                        <p><strong>Notes:</strong> {order.customer.notes}</p>
                      )}
                    </div>
                  </div>
                )}

                <div className="order-footer">
                  <span className="order-total">Total: ₹{order.total}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyOrders;
