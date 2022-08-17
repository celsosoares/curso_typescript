// EXEMPLO 1   
const numeroMax = 100;
let contador = 100;

if (contador < numeroMax){
    contador++;
}

console.log(contador);

// EXEMPLO 2
let idade = 42;

if (idade < 18){
    console.log("Voce nao pode dirigir");
} else {
    console.log("Voce pode dirigir");
}

// EXEMPLO 3

let desconto: number;
let valorCompra = 14;

if (valorCompra > 0 && valorCompra <= 5){
    desconto = 5;
} else if (valorCompra > 0 && valorCompra <= 10){
    desconto = 10;
} else {
    desconto = 15;
}

console.log(`Voce teve um desconto de ...: ${desconto}% desconto`)

// EXEMPLO 4 - operador ternário

const idadeVotacao = 17;
const podeVotar = (idadeVotacao >= 18) ? "Voce é elegivel para votar" : "Você não é elegível para votar";
console.log(podeVotar);