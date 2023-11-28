/* Verificador de divisibilidade */

let number1 = 10 ;
let number2 = 2;

const check = (number1, number2) => { 
    number1%number2 == 0 ? console.log('é divisivel') : console.log('Não é divisivel');
}

console.log(check(number1,number2));