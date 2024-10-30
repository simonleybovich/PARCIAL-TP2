import NotaController from "../controller/notaController.js";
import express from 'express'

const router = express.Router()

class NotaRouter {
    constructor() {
        this.notaController = new NotaController()
    }

    start() {

        router.post('/ingreso', this.notaController.guardarNota)
        router.get('/listado', this.notaController.obtenerListado)
        router.get('/promedio', this.notaController.obtenerPromedio)
        router.get('/minmax', this.notaController.obtenerNotaMinMax)
        router.get('/cantidad', this.notaController.obtenerCantidadNotas)

        return router
    }
}

export default NotaRouter