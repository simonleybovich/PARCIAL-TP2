class NotaModel {
    constructor() {
        this.notas = [
            { nota: 7 }
        ]
    }

    guardarNota = (nota) => {
        try {
            this.notas.push(nota)
            return nota
        } catch (error) {
            console.log('error en guardarNota', error)
            return {}
        }
    }

    obtenerListado = () => {
        try {
            return { 
                notas: this.notas 
            } 
        } catch (error) {
            console.log('error en obtenerListado', error)
            return []
        }
    }

    obtenerCantidadNotas = () => {
        try {
            return {
                cantidad: this.notas.length
            }
        } catch (error) {
            console.log('error en obtenerCantidadNotas', error)
            return 0
        }  
    }

    obtenerPromedio = () => {
        try {
            let sumaTotalNotas = this.notas.reduce((acumulador, nota) => acumulador + nota.nota, 0)
            let cantNotas = this.obtenerCantidadNotas().cantidad
            return {
                promedio: sumaTotalNotas / cantNotas 
            } 
        } catch (error) {
            console.log('error en obtenerPromedio', error)
            return {}
        }
    }

    obtenerNotaMinMax = () => {
        try {
            return {
                minima: this.notas.reduce((min, nota) => nota.nota < min.nota ? nota : min, this.notas[0]),
                maxima: this.notas.reduce((max, nota) => nota.nota > max.nota ? nota : max, this.notas[0])
            }
        } catch (error) {
            console.log('error en obtenerNotaMinMax', error)
            return {}
        }
    }
}

export default NotaModel