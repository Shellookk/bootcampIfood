// crie um programa que dado um número imprima a tabuada do mesmo

for (let i=1;i<=10;i++){
    console.log(i* 5);
}


// crie um programa que percorra uma lista de numeros e retorne os numeros par

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<numeros.length;i++){
    const numero = numeros[i];
    if (numero %2 ===0){
        console.log(numero);
    }
}
