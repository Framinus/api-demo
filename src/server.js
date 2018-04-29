const express = require('express');

const app = express();

app.use('/', (request, response, next) => {
  response.json({msg: 'Hello there!'});
});

app.listen(3000, () => {
  console.log('Your server is running on port 3000');
});
