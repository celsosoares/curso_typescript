// EXEMPLO 1 - Uso simples de tuplas
let pessoa: [string, string, number];
pessoa = ['celso', 'estudante', 25]
console.log(pessoa);

// EXEMPLO 2 - Acessando o valor da tupla
let pessoa1: [string, string, number];
pessoa1 = ['celso', 'estudante', 25]
console.log(pessoa1[1]);

// EXEMPLO 3 - Usando tuplas com labels
let pessoa2: [nome: string, posicao: string, idade: number] = ['celso', 'estudante', 25];
console.log(pessoa2);

// EXEMPLO 4 - Usando tuplas com Spread Operator
// ... = spreadOperator
let listaFrutas: [string, ...string[]] = ['banana', 'maca', 'acerola', 'melao', 'manga', 'pera'];
console.log(...listaFrutas);

// EXEMPLO 5 - Lista heterogenea de tupla
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// EXEMPLO 6 - Uso de função com tuplas
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['celso', 'caio'], [25, 32]);
console.log(resultado);

// EXEMPLO 7 - Labeled tuples com Spread Operator num funcao
type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome){
    return [...nome];
}

console.log(criarPessoa('celso', 'soares'));
console.log(criarPessoa('celso', 'soares', 'cassiano'));
