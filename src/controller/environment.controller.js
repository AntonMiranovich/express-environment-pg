const express = require("express");
const {
  getAllEnviroment,
  getEnviromentById,
  createEnviroment,
  updateEnviroment,
  deleteEnviroment,
} = require("../service/environment.service");

const route = express.Router();

route.get("/", async (req, res) => {
  const data = await getAllEnviroment();
  res.send(data);
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getEnviromentById(id);
    res.send(data);
  } catch (error) {
    res.status(404).send(error.message)
  }
});

route.post("/", async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnviroment(label, category, priority);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateEnviroment(id, label, category, priority);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data =await deleteEnviroment(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = route;
