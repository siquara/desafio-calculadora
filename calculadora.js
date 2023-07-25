class Calculadora {

    array = [];

    constructor(array) {
        this.array = array;
    }


    // Calculo do Fatorial do primeiro elemento
    fatorial(num) {
        if (num === 0) {
            return 1;

        } else {
            return num * this.fatorial(num - 1);
        }
    }


    // Calculo da média Aritimetica 
    media() {
        let soma = 0
        let media = 0

        this.array.forEach(element => {
            soma += element
            media = soma / this.array.length
        });
        return media
    }


    // Calculo da Variancia
    variancia() {
        let media = this.media()
        let variancia = 0

        this.array.forEach(element => {
            variancia += ((element - media)**2)
        });
        variancia /= this.array.length
        return variancia
    }


    // Calculo Desvio Padrão 
    desvioPadrao() {
        let desvioPadrao = this.variancia() ** (1/2)
        return desvioPadrao
    }


    // Calculos dos números Impares
    numImpares() {
        let impar = []

        this.array.forEach(element => {
            if (!(element%2 === 0)){
                impar.push(element)
            }
        });
        return impar
    }
    // M´etodo PrintAll()
    printAll() {
        console.log(`
        Fatorial do primeiro elemento: ${this.fatorial(this.array[0])}

        Média aritimética: ${this.media()}

        Variância: ${this.variancia()}

        Desvio padrão: ${this.desvioPadrao()}

        Números ímpares: ${this.numImpares()}
        `)
    }
}

let calc1 = new Calculadora([7, 8, 10, 24, 21, 38, 157, 3, 16]);
calc1.printAll();