import NotaRouter from "./routes/notaRouter.js";
import express from 'express'

const app = express()

app.use(express.static('public'))
app.use(express.json())

const notaRouter = new NotaRouter()

app.use('/notas', notaRouter.start())

const PORT = 3000
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Servidor express en error: ${error}`))
