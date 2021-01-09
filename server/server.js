const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const app = express();

const port = process.env.PORT || 3000

app.use(express.static('dist'));
app.use(bodyParser.json('application/json'));

app.listen(port, ()=> {
  console.log(`connected to ${port}`)
});

app.post('/credentials', (req, res) => {
  console.log('here');
  console.log(req.body)
  res.status(200);
  res.send({test: 'test'});
})
