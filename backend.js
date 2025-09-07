<<<<<<< HEAD
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve public/index.html and assets

app.post('/booking', (req, res) => {
  const { name, email, date, people } = req.body;
  console.log('Booking received:', req.body);
  // In a real app, you'd store this in a DB. Here we just respond back.
  res.json({
    message: Thank you ${name}, your booking for ${people} people on ${date} is confirmed!
  });
});

const PORT = process.env.PORT || 5000;
=======
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve public/index.html and assets

app.post('/booking', (req, res) => {
  const { name, email, date, people } = req.body;
  console.log('Booking received:', req.body);
  // In a real app, you'd store this in a DB. Here we just respond back.
  res.json({
    message: Thank you ${name}, your booking for ${people} people on ${date} is confirmed!
  });
});

const PORT = process.env.PORT || 5000;
>>>>>>> 6f31287 (frontend.html)
app.listen(PORT, () => console.log(Server running on port ${PORT}));