require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(express.json());
// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


app.post('/checkout', async (req, res) => {
  const session_id = req.session_id;
  let queryString = `INSERT INTO responses (session_id, name, email, address1, address2, city, state, zipcode, phone, creditCard, expiration, cvv, billingZipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  let queryArgs = [session_id, req.body.name, req.body.email, req.body.address1, req.body.address2, req.body.city, req.body.state, req.body.zipcode, req.body.phone, req.body.creditCard, req.body.expiration, req.body.cvv, req.body.billingZipcode];
  try {
    await db.queryAsync(queryString,queryArgs);
    res.sendStatus(201)
  } catch(err){
    console.log(err)
    res.sendStatus(500)
  }
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
