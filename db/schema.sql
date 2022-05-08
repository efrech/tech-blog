DROP DATABASE IF EXISTS tech_blog_db;

CREATE DATABASE tech_blog_db;


USE tech_blog_db;;


CREATE TABLE users (

  id INT NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
  
);