/* Calculo IMC */

const peso = 62; 
const altura = 1.70;

function resultado (peso, altura){ 
    let imc = peso/(altura*altura)
    return imc
}

console.log(resultado(peso, altura).toFixed(2))