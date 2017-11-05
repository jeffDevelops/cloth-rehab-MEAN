// App and Server
const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

// Image Asset Management
const path = require('path');
const multer = require('multer');

// Dev Dependencies
const morgan = require('morgan');


const storage = multer.diskStorage({
  destination: './photo_uploads'
})
let upload = multer({ dest: './photo_uploads' });

let routes = require('./config/shirt_routes');
app.use(routes);

app.listen(port, () => {
  console.log('listening on port 3000');
});
