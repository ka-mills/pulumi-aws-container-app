'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const CUSTOM_MESSAGE = process.env.CUSTOM_MESSAGE || 'No Custom Message';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World ${CUSTOM_MESSAGE}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);