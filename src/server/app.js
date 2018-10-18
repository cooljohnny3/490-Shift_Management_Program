"use strict";
const express = require('express');
const DB = require('./db');
const config = require('./config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const db = new DB();
const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// CORS middleware
// consider using CORS package
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'content-type');
  next();
}

app.use(allowCrossDomain)

router.post('/register', function(req, res) {
  db.insert([
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      bcrypt.hashSync(req.body.password, 8)
  ],
  function (err) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      res.status(200).send();
  }); 
});

router.post('/register-admin', function(req, res) {
  db.insertAdmin([
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      bcrypt.hashSync(req.body.password, 8),
      1
  ],
  function (err) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      res.status(200).send();
  }); 
});

router.post('/login', (req, res) => {
  db.selectByEmail(req.body.email, (err, user) => {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      let passwordIsValid = bcrypt.compareSync(req.body.password, user.user_pass);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token, user: user });
  });
})

router.post('/delete', (req, res) => {
  if(req.body.isAdmin != 1) { return res.status(401).send('Unauthorized.') }
  db.delete(req.body.email, (err, result) => {
    if (err) return res.status(500).send('Error on the server.');
    if (result.affectedRows == 0) return res.status(404).send('No user found.');
    res.status(200).send();
  })
})

router.post('/marketplace', (req, res) => {
  db.marketplace((err, results) => {
    if (err) return res.status(500).send('Error on the server.');
    res.status(200).send({ data: results });
  })
})

app.use(router);

let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});