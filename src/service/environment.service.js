const { getAllEnviromentDB,getEnviromentByIdDb } = require("../repository/environment.repository");

async function getAllEnviroment() {
  const data = await getAllEnviromentDB();
  return data;
}

async function getEnviromentById(id){
const data =await getEnviromentByIdDb(id)
return data
}

module.exports = { getAllEnviroment,getEnviromentById };
