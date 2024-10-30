import NotaModel from "../model/notaModel.js";

class NotaService {
    constructor(){
        this.notaModel = new NotaModel()
    }

    guardarNota = async (nota) => await this.notaModel.guardarNota(nota)

    obtenerListado = async () => await this.notaModel.obtenerListado()

    obtenerCantidadNotas = async () => await this.notaModel.obtenerCantidadNotas()

    obtenerPromedio = async () => await this.notaModel.obtenerPromedio()

    obtenerNotaMinMax = async () => await this.notaModel.obtenerNotaMinMax()

}

export default NotaService