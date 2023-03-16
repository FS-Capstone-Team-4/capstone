const express = require('express');
const path = require('path');

const app = express();

// static middleware
app.use('/api', require('./api'))
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
