const express = require('express');
const fs = require('fs');
const mustache = require('mustache');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

app
    .use(express.static(path.join(__dirname, '../client')))
    .get('/', (req, res) =>
        sendPage('/', 'index', req, res))
    .get('/resume', (req, res) =>
        sendPage('/resume', 'resume', req, res))
    .get('/thoughts', (req, res) =>
        sendPage('/thoughts', 'thoughts', req, res))
    .get('/altitude-sickness', (req, res) =>
        sendPage('/altitude-sickness', 'altitude-sickness', req, res))
    .get('/wet-hike', (req, res) =>
        sendPage('/wet-hike', 'wet-hike', req, res))
    .get('/hollywood-endings', (req, res) =>
        sendPage('/hollywood-endings', 'hollywood-endings', req, res))
    .get('/recurse-center', (req, res) =>
        sendPage('/recurse-center', 'recurse-center', req, res));

function sendPage(pagePath, pageName, req, res) {
  const template = fs.readFileSync(
      path.join(__dirname, `../client/mst/${pageName}.mst`)).toString();
  const header = fs.readFileSync(
      path.join(__dirname, '../client/mst/partials/header.mst')).toString();
  const footer = fs.readFileSync(
      path.join(__dirname, '../client/mst/partials/footer.mst')).toString();
  const html = mustache.render(
      template,
      {
        navigationEntries: [
          {isCurrentPath: '/' == pagePath, path: '/', title: 'Who am I?'},
          {isCurrentPath: '/resume' == pagePath, path: '/resume', title: 'Resume'},
          {isCurrentPath: '/thoughts' == pagePath, path: '/thoughts', title: 'Thoughts'}
        ],
      },
      {header, footer});
  res.send(html);
}

const port = process.env.PORT || 716;
server.listen(port, () => {
  console.log('Server is up on port ' + port + '.');
});