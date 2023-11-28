/* Comparador de numeros */

let n1 = 10;
let n2 = 10;

const comparador = (n1, n2) => {
    if(n1 === n2){
        return `${n1} é igual a ${n2}.`
    } else if(n1 > n2){ 
        return `${n1} é maior que ${n2}.`
    }else{ 
        return `${n1} é menor que ${n2}.`
    }
};

console.log(comparador(n1,n2));