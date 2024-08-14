const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Import and connect to MongoDB
const mongoDB = require('./db');
mongoDB();

// CORS Middleware
app.use(cors({
  origin: 'https://food-deployement.vercel.app/' // React app's origin
}));

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api', require('./Routes/CreateUser.js'));
app.use('/api', require('./Routes/DisplayData.js'));
app.use('/api', require('./Routes/orderData.js'));




// Root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
