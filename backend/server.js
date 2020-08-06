const express = require('express');
const router = require('./routes/routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/events', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection with MongoDB failed'));

const port = process.env.PORT || 8080;

const app = express();

app.use('/', router);

const server = app.listen(port, () => console.log(`Server is listening on port ${port}`));