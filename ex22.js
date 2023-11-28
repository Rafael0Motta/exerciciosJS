/* Calculo de área e perímetro de um retangulo */

let comprimento = 10;
let largura = 5; 

const area = (comprimento, largura) => { 
    let areaTotal = comprimento*largura
    return `A area é = ${areaTotal}`
}

const perimetro = (comprimento, largura) => { 
    let perimetroTotal = 2 * (comprimento+largura)
    return `O perimetro é = ${perimetroTotal}`
}

let showArea = area(comprimento, largura);
let showPerimetro = perimetro(comprimento, largura)

console.log(showArea, showPerimetro)