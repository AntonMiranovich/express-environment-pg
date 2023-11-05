const pool = require("../db");

async function getAllEnviromentDB() {
  const client = await pool.connect();
  const sql = "select * from environment";
  const result = (await client.query(sql)).rows;
  return result;
}

async function getEnviromentByIdDb(id) {
  const client = await pool.connect();
  const sql = "select * from environment where id=$1";
  const result = (await client.query(sql,[id])).rows;
  return result;
}

module.exports = { getAllEnviromentDB, getEnviromentByIdDb };
