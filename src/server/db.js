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

  marketplace(callback) {
    return this.db.query(
      'SELECT * FROM marketplace',
      (err, rows) => {
        callback(err, rows);
      }
    )
  }

  addListing(entry, callback) {
    return this.db.query(
      'INSERT INTO marketplace (type,first_name,last_name,date,start_time,end_time) VALUES (?,?,?,?,?,?)',
      entry, (err) => {
        callback(err);
      }
    )
  }

  getSchedule(date, callback) {
    return this.db.query(
      'SELECT * FROM schedule WHERE date=?', [date], 
      (err, rows) => {
        callback(err, rows);
      }
    )
  }
}

module.exports = Db