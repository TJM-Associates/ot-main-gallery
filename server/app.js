/* eslint-disable no-restricted-syntax */
require('newrelic');
const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const moment = require('moment');
const bodyParser = require('body-parser');
const cors = require('cors');
const cassandraControl = require('../database/cassandraQueries.js');
// const db = require('../db/index.js');
const app = express();
app.use(bodyParser.json());
// app.use(morgan());
app.use(cors());
app.use(compression());
app.use('/restaurants/:rid', express.static(path.resolve(__dirname, '../public')));

app.use('/', express.static('loaderio-a5b33216ec2f778b76f07dbaeeb8d8a3.txt'));

app.get('/api/restaurants/:rid/images', (req, res) => {
  cassandraControl.getRestaurant(req.params.rid)
    .then((docs) => {
      const reformattedDocs = docs.rows.map((imageDetails) => {
        const reformatted = {
          r_id: imageDetails.r_id,
          i_id: imageDetails.i_id,
          name: imageDetails.name,
          photographer: imageDetails.photographer,
          source: imageDetails.source,
          url: imageDetails.url,
          date: imageDetails.picture_date,
          restaurantId: imageDetails.restaurant_name,
        };
        return reformatted;
      });
      res.send(reformattedDocs);
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
});

app.post('/api/restaurants/:rid/images', (req, res) => {
  cassandraControl.postRestaurant(req.body, req.params.rid)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
});

app.put('/api/restaurants/:rid/images/:imageId', (req, res) => {
  cassandraControl.updateRestaurant(req.body, req.params.rid, req.params.imageId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
});

app.delete('/api/restaurants/:rid/images/:imageId', (req, res) => {
  cassandraControl.deleteRestaurant(req.params.rid, req.params.imageId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
});

module.exports = app;
