// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');

let valorComDesconto = valorTotal;
if (metodoPagamento.toLocaleLowerCase() === "pix" || metodoPagamento.toLocaleLowerCase() === "dinheiro") {
    valorComDesconto = valorTotal * 0.9;
}

const valorPorPessoa = valorComDesconto / numeroPessoas;

// Exibindo os resultados
console.log(`O valor total da conta é: R$ ${valorComDesconto.toFixed(2)}`);
console.log(`Cada pessoa deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);