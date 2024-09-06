// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Choose any port you like
const path = require('path');
const favicon = require('serve-favicon');

// Serve the favicon
app.use(favicon(path.join(__dirname, '../frontend/dist/dishdex/browser/favicon.ico')));

app.use(express.static(path.join(__dirname, '../frontend/dist/dishdex')));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/test", function (req, res) {
    res.send("Hello World!");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/dishdex/browser/index.html'));
});