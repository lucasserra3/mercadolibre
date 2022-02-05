const express = require("express");
const Task = require("../models/Task");
const router = express.Router()

const tarea = require("../models/Task")

router.get("/", async (req, res) => {
  const tasks = await tarea.find();
   res.json(tasks)
})

router.get("/:id", async (req, res)=>{
  const task = await Task.findById(req.params.id)
  res.json(task)
})

router.post("/", async (req, res) => {
const { nombre, descripcion } = req.body;
const task = new Task ({nombre, descripcion})
console.log (task)
await task.save()
 res.json({status: "tarea guardada"})
})

router.put("/:id", async (req, res)=>{
    const {nombre, descripcion} = req.body;
    const newTask = {nombre, descripcion}
   await Task.findByIdAndUpdate(req.params.id, newTask)
    console.log(req.params.id)
    res.json({status: "tarea actualizada"})
})

router.delete("/:id", async (req, res)=>{
  await  Task.findByIdAndRemove(req.params.id)
  res.json({status: "tarea eliminada"})

})

module.exports = router