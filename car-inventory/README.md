# Car Inventory Project

This is a simple example of a car inventory system for dealerships in Saudi Arabia. The project now includes basic dashboards for cars, showrooms, dealers, customers, companies and an admin view. All data is stored in memory.

## Structure

- `server/` – Express server exposing API endpoints.
- `client/` – Static HTML front-end to interact with the API. Pages exist for each role.

## Setup

1. Navigate to the `server` directory and install dependencies:
   ```sh
   npm install
   node index.js
   ```
2. Open the HTML pages in the `client` folder (e.g. `index.html`, `showrooms.html`, etc.) in a browser and use the forms to add data.

Authentication or persistent storage can be added as a future enhancement.
