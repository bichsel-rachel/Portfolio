require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const app = express();
const { Pool } = require('pg');
let Client = require('ssh2-sftp-client');
let sftp = new Client();


// set the view engine to ejs
app.set('view engine', 'ejs');

//stylesheet
app.use('/stylesheets/main.css',express.static(__dirname +'/stylesheets'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/', (req, res) =>
    res.render('pages/index'));

    sftp.connect({
        host: 'rachelbichsel.com',
        port: '18765',
        username: process.env.USERNAME,
        password: process.env.PASSWORD
      }).then(() => {
        return sftp.list('/');
      }).then(data => {
        console.log(data, 'the data info');
      }).catch(err => {
        console.log(err, 'catch error');
      });

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000 || 18765;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));