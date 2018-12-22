import { Request, Response } from 'express';

const express = require('express');
const fs = require('fs');
const mustache = require('mustache');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

app
    .use(express.static(path.join(__dirname, '../client')))
    .get('/', sendPage('/', 'index'))
    .get('/resume', sendPage('/resume', 'resume'))
    .get('/thoughts', sendPage('/thoughts', 'thoughts'))
    .get(
        '/altitude-sickness',
        sendPage('/altitude-sickness', 'altitude-sickness'))
    .get('/wet-hike', sendPage('/wet-hike', 'wet-hike'))
    .get(
        '/hollywood-endings',
        sendPage('/hollywood-endings', 'hollywood-endings'))
    .get('/recurse-center', sendPage('/recurse-center', 'recurse-center'));


function sendPage(pagePath: string, pageName: string):
    (req: Request, res: Response) => void {
  return (req, res) => {
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
            navigationEntry('/', 'Who am I?', pagePath),
            navigationEntry('/resume', 'Resume', pagePath),
            navigationEntry('/thoughts', 'Thoughts', pagePath)
          ],
        },
        {header, footer});
    res.send(html);
  };
}


function navigationEntry(
    navigationPath: string, navigationTitle: string, pagePath: string) : Object {
  return {
    isCurrentPath: navigationPath == pagePath,
    path: navigationPath,
    title: navigationTitle
  };
}


const port = process.env.PORT || 716;
server.listen(port, () => {
  console.log('Server is up on port ' + port + '.');
});