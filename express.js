'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello world\n');
});
console.log("EXPRESS");

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);