const { Client } = require("pg");

const client = new Client(
  process.env.DATABASE_URL || "postgres://localhost/cloudblaze"
);

client.connect();

module.exports = { client };
