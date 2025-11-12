import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let orders = [];
let orderIdCounter = 1;

app.get('/', (req, res) => {
  res.json({ message: 'Burger Shop API is running!' });
});

app.post('/api/orders', (req, res) => {
  const { items, total, customer } = req.body;
  
  const newOrder = {
    id: orderIdCounter++,
    items,
    total,
    customer,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  orders.push(newOrder);
  
  res.status(201).json({
    success: true,
    message: 'Order placed successfully!',
    order: newOrder
  });
});

app.get('/api/orders', (req, res) => {
  res.json({
    success: true,
    orders
  });
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  
  if (!order) {
    return res.status(404).json({
      success: false,
      message: 'Order not found'
    });
  }
  
  res.json({
    success: true,
    order
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
