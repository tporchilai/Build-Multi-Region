const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const region = process.env.AWS_REGION || 'local';

// Basic CORS headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// Serve static files from the current directory (so index.html is at "/")
app.use(express.static(__dirname));

// Fallback health/info endpoint that still shows the region (not overriding "/")
app.get('/health', (req, res) => {
  res.send(`Hello from ${region}!`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port} in region ${region}`);
});

