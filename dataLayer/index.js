const { client } = require("./client");

const sync = async () => {
  const sql = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS users;
  
  CREATE TABLE users(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "userName" VARCHAR(100),
    "teacher" BOOLEAN NOT NULL,
    "firstName" VARCHAR(100) NOT NULL CHECK(char_length("firstName") > 0),
    "lastName" VARCHAR(100) NOT NULL CHECK(char_length("lastName") > 0),
    email VARCHAR(100) NOT NULL CHECK(char_length(email) > 0),
    password VARCHAR(100),
    "googleId" VARCHAR(100),
    "imageURL" VARCHAR(350)
  );`;
  await client.query(sql);
};

module.exports = {
  sync,
};
