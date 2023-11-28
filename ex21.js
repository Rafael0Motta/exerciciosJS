/* Concatenação de Strings */

let nome = "Rafael"; 
let cidade = "Rio de janeiro"; 
let idade = 21; 

function criarMensagem(nome, idade, cidade){ 
    return `Olá ${nome}, você tem ${idade} anos e mora no ${cidade}.`;
}

const mensagem = criarMensagem(nome,idade,cidade);

console.log(mensagem)