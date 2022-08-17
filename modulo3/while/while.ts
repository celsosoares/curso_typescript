let cont = 0;

while (cont < 5) {
    console.log(cont);
    cont++;
}

let numero = 1;

while (numero <= 20){
    if (numero % 5 == 0){
        console.log("\nO primeiro numero multiplo de 5 entre 1 a 10 é: ", numero);
        break;
    }
    numero++;
}