const express = require('express');
const router = express.Router();
const { Booking } = require('../models');

router.get('/bookings', async (req, res) => {
  const bookings = await Booking.findAll({ order: [['createdAt', 'DESC']] });
  res.render('admin_bookings', { bookings });
});

module.exports = router;