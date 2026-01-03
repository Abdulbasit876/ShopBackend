const express = require('express');
const cors = require('cors');
const connectDB = require('../config/db');
const routes = require('./routes');
require('dotenv').config()

const app = express();

// DB connect
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api', routes);

module.exports = app;
