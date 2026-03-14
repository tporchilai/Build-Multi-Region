const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const region = process.env.AWS_REGION || 'local';

app.get('/', (req, res) => {
  res.send(`Hello from ${region}!`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port} in region ${region}`);
});

