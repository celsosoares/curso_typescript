function somarNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

const result = somarNumeros(2, 2);
console.log(result);


//Função anônima
const saudar = function (message: string) {
    return message;
}

console.log(saudar("Olá celso"));

// arrow function expression
// o simbolo " => " substitui o nome function, mas ambos se comportam iguais
const saudar02 = (message: string)  => {
    return message;
}

console.log(saudar("Olá celso02"));


// Função com parametro opcional
// sempre tem q ser o ultimo parametro
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
    console.log("Id Funcionario ...: ", idPessoa, "Nome... : ", nome);

    if (email != undefined) {
        console.log("Email ...: ", email);
    }
}

informarDadosPessoa(5555453, 'Celso Soares');
informarDadosPessoa(5555453, 'Celso Soares', 'celso@email.com');


// Função com parametro default
// com o parametro default o parametro passa a ser tratado como opcional
// sempre tem q ser oo ultimos parametros
function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto);
}

console.log(descontoCompra(100));


// Função com rest parameters
function somarListaNumeros(...numeros: number[]) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));

    return total;
}

console.log(somarListaNumeros(30, 20));
console.log(somarListaNumeros(40, 50, 20, 10, 2));

