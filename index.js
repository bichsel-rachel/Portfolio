require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const app = express();
const { Pool } = require('pg');

var http = require('http');
var enforce = require('express-sslify');


// set the view engine to ejs
app.set('view engine', 'ejs');

//stylesheet
app.use('/stylesheets/main.css',express.static(__dirname +'/stylesheets'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/', (req, res) =>
    res.render('pages/index'));

    app.get('/resume', (req, res) =>
    res.render('pages/resume'));

//Project Pages
app.get('/projects/burger-motion', (req, res) =>
    res.render('pages/projects/burger-motion'));

    app.get('/projects/surviving-parenthood', (req, res) =>
    res.render('pages/projects/surviving-parenthood'));

    app.get('/projects/hikers', (req, res) =>
    res.render('pages/projects/hikers'));

    app.get('/projects/haunted', (req, res) =>
    res.render('pages/projects/haunted'));

    app.get('/projects/mountain-spoke', (req, res) =>
    res.render('pages/projects/mountain-spoke'));

    app.get('/projects/cowboys', (req, res) =>
    res.render('pages/projects/cowboys'));

    app.get('/projects/manual-designers', (req, res) =>
    res.render('pages/projects/manual-designers'));

    app.get('/projects/apache-pest-control', (req, res) =>
    res.render('pages/projects/pest-control'));

    app.get('/projects/gresham_fencing', (req, res) =>
    res.render('pages/projects/gresham_fencing'));

   

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));



 const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Use enforce.herHTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
//app.use(enforce.HTTPS());
app.use(enforce.HTTPS({ trustProtoHeader: true }))

http.createServer(app).listen(PORT, function() {
    console.log('Express server listening on port ' + PORT);
});