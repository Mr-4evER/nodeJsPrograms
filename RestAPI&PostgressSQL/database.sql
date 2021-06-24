CREATE DATABASE nodejs;

--\c into database

CREATE TABLE demo(
    id int primary key,
    username varchar(30),
    password varchar(30)
);