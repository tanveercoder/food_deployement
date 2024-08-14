const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Import and connect to MongoDB
const mongoDB = require('./db');
mongoDB();

// CORS Middleware
app.use(cors({
  origin: 'http://localhost:5173' // React app's origin
}));

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/orderData'));




// Root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
