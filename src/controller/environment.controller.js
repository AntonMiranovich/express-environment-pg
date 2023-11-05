const express = require("express");
const { getAllEnviroment,getEnviromentById } = require("../service/environment.service");

const route = express.Router();

route.get("/", async (req, res) => {
  const data = await getAllEnviroment();
  res.send(data);
});

route.get('/:id', async(req,res)=>{
    const {id}=req.params
    const data=await getEnviromentById(id)
    res.send(data)
})

module.exports = route;
