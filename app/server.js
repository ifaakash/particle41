const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Return timestamp and visitor IP
app.get("/", (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
  };
  res.json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`SimpleTimeService running on http://0.0.0.0:${PORT}`);
});
