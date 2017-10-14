const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  //whole helluva lot of Etsy stuff here
  res.send('Hello, world');
});

app.get('/admin', (req, res) => {
  res.send('Hello Vivian');
});

app.listen(port, () => {
  console.log('listening on port 3000');
});
