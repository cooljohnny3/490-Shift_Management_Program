CREATE DATABASE IF NOT EXISTS SKEJ;
CREATE USER 'db_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON SKEJ.* TO 'db_user'@'localhost';

USE SKEJ;
CREATE TABLE IF NOT EXISTS users (
              id INT AUTO_INCREMENT, 
              name TINYTEXT,
              email VARCHAR(50) UNIQUE, 
              user_pass TINYTEXT,
              is_admin INT,
              PRIMARY KEY (id));

/*
CREATE TABLE IF NOT EXISTS marketplace (
              id INT AUTO_INCREMENT, 
              name TINYTEXT,
              email VARCHAR(50) UNIQUE, 
              user_pass TINYTEXT,
              is_admin INT,
              PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS schedule (
              id INT AUTO_INCREMENT, 
              name TINYTEXT,
              email VARCHAR(50) UNIQUE, 
              user_pass TINYTEXT,
              is_admin INT,
              PRIMARY KEY (id));
*/

INSERT INTO users (name,email,user_pass,is_admin) VALUES ('admin', 'admin', '$2a$08$gaARy0Azr3lgf0BB6YkQ1ORobCasZIwBXQebAd2C8KedSyBJ6vZPC', 1);