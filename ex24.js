/* Classificação de Faixa etaria */

let idade = 1;

const validador = (idade) => {
  if (idade >= 0 && idade <= 12) {
    return "Criança";
  } else if (idade >= 13 && idade <= 17) {
    return "Adolescente";
  } else if (idade >= 18 && idade <= 59) {
    return "Adulto";
  } else if (idade >= 60) {
    return "Idoso";
  } else { 
    return "Digite uma idade valida";
  }
};

console.log(validador(idade))
