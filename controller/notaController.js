import NotaService from "../service/notaService.js";

class NotaController {
    constructor() {
        this.notaService = new NotaService()
    }

    guardarNota = async (req, res) => {
        try {
            let nota = req.body
            let notaGuardada = await this.notaService.guardarNota(nota)
            res.json(notaGuardada)
        } catch (error) {
            console.log('error guardarNota', error)
        }
    }

    obtenerListado = async (req, res) => {
        try {
            let listadoNotas = await this.notaService.obtenerListado()
            res.json(listadoNotas)
        } catch (error) {
            console.log('error obtenerListado', error)
        }
    }
    obtenerCantidadNotas = async (req, res) => {
        try {
            let cantNotas = await this.notaService.obtenerCantidadNotas()
            res.json(cantNotas)
        } catch (error) {
            console.log('error obtenerCantidadNotas', error)
        }
    }
    obtenerPromedio = async (req, res) => {
        try {
            let promedio = await this.notaService.obtenerPromedio()
            res.json(promedio)
        } catch (error) {
            console.log('error obtenerPromedio', error)
        }
    }
    obtenerNotaMinMax = async (req, res) => {
        try {
            let notaMinMax = await this.notaService.obtenerNotaMinMax()
            res.json(notaMinMax)
        } catch (error) {
            console.log('error obtenerNotaMinMax', error)
        }
    }
}

export default NotaController