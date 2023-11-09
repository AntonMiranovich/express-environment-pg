const express = require('express');
const {
  getAllEnviroment,
  getEnviromentById,
  createEnviroment,
  updateEnviroment,
  deleteEnviroment,
  patchEnviroment,
} = require('../service/environment.service');
const { isValidEnviromentId, isValidBody } = require('../helper/validation');
const buildResponse = require('../helper/builResponse');

const route = express.Router();

route.get('/', async (req, res) => {
  const data = await getAllEnviroment();
  buildResponse(res, 200, data);
});

route.get('/:id', isValidEnviromentId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getEnviromentById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidBody, async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnviroment(label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidEnviromentId, isValidBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateEnviroment(id, label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidEnviromentId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteEnviroment(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch('/:id', isValidEnviromentId, async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;
    const data = await patchEnviroment(id, clientObj);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
