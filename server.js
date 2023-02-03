const express = require("express");
const db = require('./Connection/connection');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    console.log("Test#")
    res.send("Test1")
})

db.once('open', () => {
    console.log('connected to mongoDB')
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });