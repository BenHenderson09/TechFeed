import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';


import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';
import * as http from 'http';
    
import {join} from 'path';

export const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Robots.txt for crawlers
app.use('/robots.txt', (req, res)=>{
    res.type('text/plain');
    res.send("User-agent: Mediapartners-Google\nDisallow:");
});

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Dist folder (change to ./dist for running inside this directory)
const DIST_FOLDER = join(process.cwd(), 'client/dist');

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }));
  
app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('/redirect/**', (req, res) => {
const location = req.url.substring(10);
res.redirect(301, location);
});

app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
maxAge: '1y'
}));

// Get api routes configured.
const apiRoutes = require("../app.js");
app.use("/api", apiRoutes);

// Start up the Node server
const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
    res.render('index', {req, res}, (err, html) => {
        if (html) {
        res.send(html);
        } else {
        console.error(err);
        res.send(err);
        }
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});