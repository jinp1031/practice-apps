const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });
// connection.connect()
db.connectAsync()
  .then(() => console.log(`Connected to ${process.env.DB_NAME} as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    {
    db.queryAsync('USE checkout')
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(300) NOT NULL,
        name VARCHAR(20),
        email VARCHAR(200),
        address1 VARCHAR(200),
        address2 VARCHAR(200),
        city VARCHAR(20),
        state VARCHAR(20),
        zipcode VARCHAR(20),
        phone VARCHAR(20),
        creditCard VARCHAR(200),
        expiration VARCHAR(20),
        cvv VARCHAR(20),
        billingZipcode VARCHAR(20),
        UNIQUE (session_id)
      )`
    )
  }
  )
  .catch((err) => console.log(err));

module.exports = db;
