
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import indexRouter from "./routes/index. routes.js"

dotenv.config

const app= express()

app.use(cors())
app.use(express.json())
app.use(indexRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{console.log(`tá rodando na porta ${PORT}`)})