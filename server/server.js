const express = require('express');
const db = require('../db');
const app = express();

const port = process.env.PORT || 3000

app.use(express.static('dist'))

app.listen(port, ()=> {
  console.log(`connected to ${port}`)
});
