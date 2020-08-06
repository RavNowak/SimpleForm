const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { eventController } = require('../controllers/eventController');

const router = express.Router();

router.use(cors({
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
],
  credentials: true
}));

router.use(bodyParser.json());

router.post('/event', eventController);

module.exports = router;