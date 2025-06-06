const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// In-memory store
const store = {
  cars: [],
  showrooms: [],
  dealers: [],
  customers: [],
  companies: []
};

// Cars endpoints
app.get('/api/cars', (req, res) => {
  res.json(store.cars);
});

app.post('/api/cars', (req, res) => {
  const car = req.body;
  car.id = store.cars.length + 1;
  store.cars.push(car);
  res.status(201).json(car);
});

// Add more endpoints as needed for showrooms, dealers, etc.

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
