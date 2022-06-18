"use strict";
// EXEMPLO 1 - Uso simples de tuplas
let pessoa;
pessoa = ['celso', 'estudante', 25];
console.log(pessoa);
// EXEMPLO 2 - Acessando o valor da tupla
let pessoa1;
pessoa1 = ['celso', 'estudante', 25];
console.log(pessoa1[1]);
// EXEMPLO 3 - Usando tuplas com labels
let pessoa2 = ['celso', 'estudante', 25];
console.log(pessoa2);
// EXEMPLO 4 - Usando tuplas com Spread Operator
// ... = spreadOperator
let listaFrutas = ['banana', 'maca', 'acerola', 'melao', 'manga', 'pera'];
console.log(...listaFrutas);
// EXEMPLO 5 - Lista heterogenea de tupla
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// EXEMPLO 6 - Uso de função com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['celso', 'caio'], [25, 32]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('celso', 'soares'));
console.log(criarPessoa('celso', 'soares', 'cassiano'));
