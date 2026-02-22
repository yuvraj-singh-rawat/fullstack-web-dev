const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // middleware

app.use('/api/users', userRoutes); // base route

module.exports = app;