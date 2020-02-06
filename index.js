const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const massive = require("massive");
const app = express();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const { addDog, getDogs } = require("./controllers/dogs");

// console.log(process.env);

app
  .use(express.json())

// heroku project uri. Add ?ssl=true (Connecting to Heroku DB)
massive(CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.error(err));

app
  .get("/api/dogs", getDogs)
  .post("/api/dogs", addDog)

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));