const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const userRoutes = require('./user/routes');

app.use('/user', userRoutes);

module.exports = app;
