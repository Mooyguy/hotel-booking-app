const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Your middleware and routes here
app.get('/', (req, res) => {
  res.json({ message: 'Hotel Booking App is running!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
