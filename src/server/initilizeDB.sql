CREATE DATABASE IF NOT EXISTS SKEJ;
CREATE USER 'db_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON SKEJ.* TO 'db_user'@'localhost';

USE SKEJ;
CREATE TABLE IF NOT EXISTS users (
              id INT AUTO_INCREMENT, 
              first_name TINYTEXT,
              last_name TINYTEXT,
              email VARCHAR(50) UNIQUE, 
              user_pass TINYTEXT,
              is_admin INT,
              PRIMARY KEY (id));


CREATE TABLE IF NOT EXISTS marketplace (
              id INT AUTO_INCREMENT, 
              type TINYTEXT,
              first_name TINYTEXT,
              last_name TINYTEXT,
              date DATE,
              start_time TIME,
              end_time TIME,
              PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS schedule (
              id INT AUTO_INCREMENT, 
              first_name TINYTEXT,
              last_name TINYTEXT,
              date DATE,
              start_time TIME,
              end_time TIME,
              PRIMARY KEY (id));


INSERT INTO users (first_name,email,user_pass,is_admin) VALUES ('admin', 'admin', '$2a$08$gaARy0Azr3lgf0BB6YkQ1ORobCasZIwBXQebAd2C8KedSyBJ6vZPC', 1);
INSERT INTO marketplace (type, first_name, last_name, date, start_time, end_time) VALUES ('Offer', 'John', 'Brehm', '2018-10-17', '9:00', '5:00');
INSERT INTO marketplace (type, first_name, last_name, date, start_time, end_time) VALUES ('Offer', 'Chris', 'Name', '2018-10-17', '9:00', '5:00');
INSERT INTO marketplace (type, first_name, last_name, date, start_time, end_time) VALUES ('Offer', 'Robert', 'Smith', '2018-10-17', '9:00', '5:00');
INSERT INTO marketplace (type, first_name, last_name, date, start_time, end_time) VALUES ('Request', 'Susan', 'Filler', '2018-10-17', '9:00', '5:00');
INSERT INTO marketplace (type, first_name, last_name, date, start_time, end_time) VALUES ('Request', 'Peter', 'What?', '2018-10-17', '9:00', '5:00');
INSERT INTO schedule (first_name, last_name, date, start_time, end_time) VALUES ('John', 'Brehm', '2018-10-18', '11:00', '12:15');
INSERT INTO schedule (first_name, last_name, date, start_time, end_time) VALUES ('Peter', 'Brehm', '2018-10-18', '1:00', '3:15');
INSERT INTO schedule (first_name, last_name, date, start_time, end_time) VALUES ('Robert', 'Smith', '2018-10-19', '11:00', '12:15');
INSERT INTO schedule (first_name, last_name, date, start_time, end_time) VALUES ('Chris', 'Black', '2018-10-19', '1:00', '3:15');