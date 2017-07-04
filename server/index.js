const express = require('express');

const Bookings = require('./bookshelf/collections').Bookings;

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/bookings', (req, res) => {
  Bookings.forge().fetch({ columns: ['week', 'year'] }).then((bookings) => {
    res.json(bookings);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
