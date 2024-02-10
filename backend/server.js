// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Choose any port you like
const path = require('path');

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, '../frontend/dist/dishdex/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/dishdex/browser/index.html'));
});