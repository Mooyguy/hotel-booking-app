const express = require('express');
const router = express.Router();
const { Booking } = require('../models');

// Route to display the booking form (matches GET /booking)
router.get('/', (req, res) => {
  const roomId = req.query.room || null;
  res.render('booking_form', { roomId });
});

// Route to handle booking form submission (matches POST /booking)
router.post('/', async (req, res) => {
  try {
    const b = await Booking.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      arrivalDate: req.body.arrivalDate,
      leavingDate: req.body.leavingDate,
      numberOfPeople: req.body.numberOfPeople,
      roomId: req.body.roomId || null,
      message: req.body.message || null,
      price: req.body.price || null
    });
    req.flash('success', 'Booking created successfully');
    res.redirect(`/booking/confirmation/${b.id}`);
  } catch (err) {
    console.error(err);
    req.flash('error', 'There was an error saving your booking. Please try again.');
    res.redirect('/booking');
  }
});

// Route to display booking confirmation
router.get('/confirmation/:id', async (req, res) => {
  const b = await Booking.findByPk(req.params.id);
  if (!b) return res.status(404).send('Not found');
  res.render('booking_confirmation', { booking: b });
});

module.exports = router;