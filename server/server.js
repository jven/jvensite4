const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

app
    .use(express.static(path.join(__dirname, '../client')))
    .get('/', (req, res) => sendPage('index.html', req, res))
    .get('/resume', (req, res) => sendPage('resume.html', req, res))
    .get('/thoughts', (req, res) => sendPage('thoughts.html', req, res))
    .get('/altitude-sickness', (req, res) => sendPage('altitude-sickness.html', req, res))
    .get('/wet-hike', (req, res) => sendPage('wet-hike.html', req, res))
    .get('/hollywood-endings', (req, res) => sendPage('hollywood-endings.html', req, res));

function sendPage(pageName, req, res) {
  res.sendFile(path.join(__dirname, '../client', pageName));
}

const port = process.env.PORT || 716;
server.listen(port, () => {
  console.log('Server is up on port ' + port + '.');
});