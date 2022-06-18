// VARIVEIS
let number1: number = 8.5;
console.log(number1)

let nome: string = 'Celso Soares';
console.log(nome);

let ligado: boolean = false;
console.log(ligado);

// ARRAYS
let animais: string[] = ['Elefante', 'Cachorro', 'Gato'];
console.log(animais);

let numPares: number[] = [2, 4, 6, 8, 10];
console.log(numPares);


// OBJETOS
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'Fiat', ano: 2004, preco: 5000}
console.log(carro)


// TUPLA 
// tuplas admitem tipos diferentes dentro da estrutura
let nomeProfissaoIdade: [string, string, number];
nomeProfissaoIdade = ['celso soares', 'estudante', 25];


// FUNÇÕES  
function multiplicarNumero(num1: number, num2: number) {
    return num1 * num2
}

console.log(multiplicarNumero(2, 5))
