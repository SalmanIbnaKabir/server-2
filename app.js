const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send('server is running successfully')
})



module.exports = app;