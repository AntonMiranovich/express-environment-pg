const pool = require('../db');

async function getAllEnviromentDB() {
  const client = await pool.connect();
  const sql = 'select * from environment';
  const result = (await client.query(sql)).rows;
  return result;
}

async function getEnviromentByIdDb(id) {
  const client = await pool.connect();
  const sql = 'select * from environment where id=$1';
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createEnviromentBD(label, category, priority) {
  const client = await pool.connect();
  const sql = 'insert into environment (label,category,priority) values($1,$2,$3) returning *';
  const result = (await client.query(sql, [label, category, priority])).rows;
  return result;
}

async function updateEnviromentDB(id, label, category, priority) {
  const client = await pool.connect();
  const sql = 'update environment set label = $2,category = $3, priority=$4 where id=$1 returning *';
  const result = (await client.query(sql, [id, label, category, priority])).rows;
  return result;
}

async function deleteEnviromentDB(id) {
  const client = await pool.connect();
  const sql = 'delete from environment where id=$1 returning *';
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function patchEnviromentBD(id, clientObj) {
  const client = await pool.connect();
  const sqlSearchById = 'select * from environment where id=$1';
  const oldObj = (await client.query(sqlSearchById, [id])).rows;
  const newObj = { ...oldObj, ...clientObj };
  const sqlPatch = 'update environment set label = $2,category = $3, priority=$4 where id=$1 returning *';
  const result = await client.query(sqlPatch, [id, newObj.label, newObj.category, newObj.priority]);
  return result;
}

module.exports = {
  getAllEnviromentDB,
  getEnviromentByIdDb,
  createEnviromentBD,
  updateEnviromentDB,
  deleteEnviromentDB,
  patchEnviromentBD,
};
