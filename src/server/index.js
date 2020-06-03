const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mockAPIResponse = require('./mockAPI.js');

const app = express();

// cors for cross origin allowance
app.use(cors());

// set up of body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();

// Aylien API
const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.use(express.static('dist'));

const tempData = [];

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.post('/userResponse', function(req, res) {
  const newEntry = { text: req.body.text };
  tempData.push(newEntry);
});

app.get('/allsentiment', function(req, res) {
  let tempDataLength = tempData.length - 1;
  textapi.sentiment({
    'text': tempData[tempDataLength].text
  }, function(error, response) {
    if (error == null) {
      console.log(response)
    }
    res.send(response);
  });

});

app.get('/allclassify', function(req, res) {
  let tempDataLength = tempData.length - 1;
  textapi.classify({
    'url': tempData[tempDataLength].text
  }, function(error, response) {
    if (error == null) {
      console.log(response)
    }
    res.send(response);
  });

});

// designates what port the app will listen to for incoming requests
const PORT = 8082;
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});