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

// Showrooms endpoints
app.get('/api/showrooms', (req, res) => {
  res.json(store.showrooms);
});

app.post('/api/showrooms', (req, res) => {
  const showroom = req.body;
  showroom.id = store.showrooms.length + 1;
  store.showrooms.push(showroom);
  res.status(201).json(showroom);
});

// Dealers endpoints
app.get('/api/dealers', (req, res) => {
  res.json(store.dealers);
});

app.post('/api/dealers', (req, res) => {
  const dealer = req.body;
  dealer.id = store.dealers.length + 1;
  store.dealers.push(dealer);
  res.status(201).json(dealer);
});

// Customers endpoints
app.get('/api/customers', (req, res) => {
  res.json(store.customers);
});

app.post('/api/customers', (req, res) => {
  const customer = req.body;
  customer.id = store.customers.length + 1;
  store.customers.push(customer);
  res.status(201).json(customer);
});

// Companies endpoints
app.get('/api/companies', (req, res) => {
  res.json(store.companies);
});

app.post('/api/companies', (req, res) => {
  const company = req.body;
  company.id = store.companies.length + 1;
  store.companies.push(company);
  res.status(201).json(company);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
