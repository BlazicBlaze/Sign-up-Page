create database blazicWeb;

create table userDetails (
  id int identity(1,1) primary key,
  username varchar not null,
  email varchar not null unique,
  password varchar not null
);