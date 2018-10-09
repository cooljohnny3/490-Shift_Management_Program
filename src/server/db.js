"use strict";
const mysql = require('mysql');
const config = require('./config');


class Db {
    constructor() {
        this.db = new mysql.createConnection({
          host: "localhost",
          user: config.dbUser,
          password: config.dbPass
        });
        this.db.conecct(function(err) {
          if (err) throw err;
          console.log("Connected!");
        });
        this.createUserTable();
        this.createMarketplaceTable();
    }

    createUserTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS user (
                id INT AUTO_INCREMENT, 
                name TINYTEXT,
                email VARCHAR(50) UNIQUE, 
                user_pass TINYTEXT,
                is_admin INT,
                PRIMARY KEY (id));`
        return this.db.run(sql);
    }

    // TODO
    createMarketplaceTable() {
      /*const sql = `
            CREATE TABLE IF NOT EXISTS user (
                id INT AUTO_INCREMENT, 
                name TINYTEXT,
                email VARCHAR(50) UNIQUE, 
                user_pass TINYTEXT,
                is_admin INT,
                PRIMARY KEY (id));`
        return this.db.run(sql);*/
        return;
    }

    selectByEmail(email, callback) {
        return this.db.get(
            `SELECT * FROM user WHERE email = ?`,
            [email],function(err,row){
                callback(err,row)
            })
    }

    insertAdmin(user, callback) {
        return this.db.run(
            'INSERT INTO user (name,email,user_pass,is_admin) VALUES (?,?,?,?)',
            user, (err) => {
                callback(err)
            })
    }

    selectAll(callback) {
        return this.db.all(`SELECT * FROM user`, function(err,rows){
            callback(err,rows)
        })
    }

    insert(user, callback) {
        return this.db.run(
            'INSERT INTO user (name,email,user_pass) VALUES (?,?,?)',
            user, (err) => {
                callback(err)
            })
    }
}

module.exports = Db