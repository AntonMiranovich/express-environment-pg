const {
  getAllEnviromentDB,
  getEnviromentByIdDb,
  createEnviromentBD,
  updateEnviromentDB,
  deleteEnviromentDB,
  patchEnviromentBD,
} = require("../repository/environment.repository");

async function getAllEnviroment() {
  const data = await getAllEnviromentDB();
  return data;
}

async function getEnviromentById(id) {
  const data = await getEnviromentByIdDb(id);
  if (!data.length) throw new Error("this id is not found");
  return data;
}

async function createEnviroment(label, category, priority) {
  const data = await createEnviromentBD(label, category, priority);
  if (!data.length) throw new Error("this obj is not");
  return data;
}

async function updateEnviroment(id, label, category, priority) {
  const data = await updateEnviromentDB(id, label, category, priority);
  if (!data.length) throw new Error("this id is not found");
  return data;
}

async function deleteEnviroment(id) {
  const data = await deleteEnviromentDB(id);
  if (!data.length) throw new Error("this id is not found");
  return data;
}

async function patchEnviroment(id, clientObj){
  const data=await patchEnviromentBD(id, clientObj)
  if (!data.length) throw new Error("this id is not found");
  return data;
}

module.exports = {
  getAllEnviroment,
  getEnviromentById,
  createEnviroment,
  updateEnviroment,
  deleteEnviroment,
  patchEnviroment,
};
