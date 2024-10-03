const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const cors = require('cors');
const userRoutes = require('./src/routes/user.route.js');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: '*', 
  credentials: true,
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
