/*
== iguala só que ignora o tipo
=== igual 
*/

const numero = 15;

const numeroDivisivelpor5 =(numero % 5) === 0;

if (numeroDivisivelpor5) {
    console.log('Sim');
}
else{
    console.log('Impar');
}
