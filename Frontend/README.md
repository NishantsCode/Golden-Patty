# 🍔 Burger Shop Website

A modern, fully-functional burger restaurant website with cart system, order management, and beautiful UI.

## ✨ Features

### 🎨 Modern Design
- Clean, professional UI with Dark Brown, Gold, and Cream color palette
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Consistent backgrounds throughout

### 🛒 Shopping Cart
- Add/remove items
- Quantity management
- Cart icon with item count
- Checkout with customer details
- Green success message on order

### 📦 Order Management
- Separate "My Orders" page
- Order history with details
- Status tracking (Pending, Preparing, Delivered)
- Order numbers and timestamps

### 🖼️ Gallery
- Interactive image gallery
- Lightbox view for images
- Restaurant atmosphere showcase


### 📱 Responsive
- Mobile-first design
- Hamburger menu
- Touch-friendly
- Works on all devices

## 🚀 Quick Start

### 1. Start Backend
```bash
cd Backend
npm install
npm start
```
Backend runs on: `http://localhost:5000`

### 2. Start Frontend (New Terminal)
```bash
cd Frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:5173`

### 3. Clear Old Data (If Needed)
Open browser console (F12) and run:
```javascript
localStorage.removeItem('myOrders')
```

## 📁 Project Structure

```
├── src/
│   ├── pages/
│   │   ├── Home.jsx              # Home page
│   │   └── MyOrdersPage.jsx      # Orders page
│   ├── Components/
│   │   ├── Navbar/               # Navigation
│   │   ├── Hero/                 # Hero section
│   │   ├── Menu/                 # Menu with items
│   │   ├── Cart/                 # Shopping cart
│   │   ├── CartIcon/             # Cart icon
│   │   ├── MyOrders/             # Order history
│   │   ├── About/                # About section
│   │   ├── Middle/               # Gallery
│   │   ├── Programs/             # Burger showcase
│   │   ├── Promotion/            # Promotions
│   │   ├── Cont/                 # Contact
│   │   └── Footer/               # Footer
│   ├── assets/                   # Images
│   ├── App.jsx                   # Main app with routing
│   └── index.css                 # Global styles
│
└── Backend/
    ├── server.js                 # Express server
    └── package.json              # Backend dependencies
```

## 🎯 Pages

### Home (`/`)
- Hero section
- Menu with "Add to Cart"
- About section
- Gallery
- Promotions
- Contact form

### My Orders (`/my-orders`)
- Order history
- Order details
- Status tracking
- Customer information

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Vite
- CSS3

### Backend
- Node.js
- Express.js
- CORS

## 📝 Usage

### Browse & Order
1. Browse menu items
2. Click "Add to Cart" on any burger
3. View cart (click cart icon)
4. Proceed to checkout
5. Fill in delivery details
6. Place order
7. See green success message

### View Orders
1. Click "My Orders" in navbar
2. View all past orders
3. See order details and status

## 🎨 Color Palette

- **Dark Brown**: `#42220b` - Primary dark
- **Light Gray**: `#1c1c1c` - Text
- **Gold**: `#FFD700` - Accents & CTAs
- **Cream**: `#f5f5f0` - Backgrounds
- **White**: `#ffffff` - Cards

## 🔧 Configuration

### Backend Port
Default: `5000`
Change in: `Backend/server.js`

### Frontend Port
Default: `5173` (Vite default)
Change in: `vite.config.js`

## 📱 Responsive Breakpoints

- Mobile: `< 480px`
- Tablet: `481px - 768px`
- Desktop: `> 768px`


### Orders not showing
Clear localStorage:
```javascript
localStorage.removeItem('myOrders')
```

## 🤝 Contributing

Feel free to fork, modify, and use this project for your own burger shop or restaurant website!

---

Made with ❤️ and 🍔

Enjoy your burger shop website! 🎉
