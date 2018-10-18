"use strict";
const mysql = require('mysql');
const config = require('./config');


class Db {
  constructor() {
    this.db = new mysql.createConnection({
      host: 'localhost',
      user: config.dbUser,
      password: config.dbPass,
      database: 'SKEJ'
    });
    this.db.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }

  selectByEmail(email, callback) {
    return this.db.query(
      `SELECT * FROM users WHERE email = ?`,
      [email], function (err, row) {
        callback(err, row[0])
      })
  }

  insertAdmin(user, callback) {
    return this.db.query(
      'INSERT INTO users (first_name,last_name,email,user_pass,is_admin) VALUES (?,?,?,?,?)',
      user, (err) => {
        callback(err)
      })
  }

  selectAll(callback) {
    return this.db.query(`SELECT * FROM users`, function (err, rows) {
      callback(err, rows)
    })
  }

  insert(user, callback) {
    return this.db.query(
      'INSERT INTO users (first_name,last_name,email,user_pass) VALUES (?,?,?,?)',
      user, (err) => {
        callback(err)
      })
  }

  delete(email, callback) {
    return this.db.query(
      'DELETE FROM users WHERE email=\'' + email + '\'',
      (err, result) => { 
        callback(err, result);
      })
  }
}

module.exports = Db