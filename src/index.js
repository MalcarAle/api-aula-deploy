require("dotenv").config()
const knex = require("./database/connection")
const express = require("express")

const app = express()

app.use(express.json())

app.get("/carros", async (req, res) => {
  const carros = await knex("carros")

  return res.json(carros)
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})
