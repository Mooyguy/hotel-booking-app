const express = require('express');
const router = express.Router();

// Use the existing images in public/images (filenames include spaces and start at room 101)
const imageFiles = [
  'room 101.jpg',
  'room 102.jpg',
  'room 103.jpg',
  'room 104.jpg',
  'room 105.jpg',
  'room 106.jpg',
  'room 107.jpg',
  'room 108.jpg',
  'room 109.jpg',
  'room 110.jpg'
];

const rooms = imageFiles.map((file, idx) => ({
  id: idx + 1,
  title: `Room ${101 + idx}`,
  price: (80 + idx * 10).toFixed(2),
  image: `/images/${encodeURIComponent(file)}`
}));

router.get('/', (req, res) => {
  res.render('index', { rooms });
});

router.get('/about', (req, res) => res.render('about'));
router.get('/privacy', (req, res) => res.render('privacy'));

module.exports = router;