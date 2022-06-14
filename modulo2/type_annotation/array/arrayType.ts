// Exemplo 1 - uso de colchetes
let frutas: string[] = ['abacaxi', 'laranja', 'maca', 'melancia', 'manga'];
console.log(frutas[2]);

// Exemplo 2 - Array object
let frutas1: Array<string> = ['abacaxi', 'laranja', 'maca', 'melancia', 'manga'];
console.log(frutas1[0]);

// Exemplo 3 - Adicionando mais strings com metodo push
let idiomas: Array<string> = ['Portugues', 'Ingles', 'Espanhol', 'Frances'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);

// Exemplo 4 - Identificar tamanho do array - metodo length
let idiomas1: Array<string> = ['Portugues', 'Ingles', 'Espanhol', 'Frances'];
console.log(idiomas1.length)

// Exemplo 5 - Exemplo de Array com Spread Operato
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]
console.log(listaNumeros)

// Exemplo 6 - Exemplo de Array com laço de iteração
let linguagensArray: string[] = new Array('Javascript', 'Python', 'PHP', 'C#');

function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}

funcaoLinguagens(linguagensArray);
