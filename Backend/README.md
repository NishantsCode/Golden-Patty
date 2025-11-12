# Burger Shop Backend

Simple Express.js backend for the Burger Shop application.

## Installation

```bash
cd Backend
npm install
```

## Running the Server

```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### GET /
- Returns API status

### POST /api/orders
- Create a new order
- Body: `{ items: [], total: number }`

### GET /api/orders
- Get all orders

### GET /api/orders/:id
- Get a specific order by ID
