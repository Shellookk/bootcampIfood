/*
Faça um programa para calcular o valor de uma viagem

Você terá 5 variaveis. Sendo elas:
    1 - Preço Etanol;
    2 - Preço da Gasolina
    3 - O tipo de combustivel que está no seu carro;
    4 - Gasto médio de combustivel do carro por KM
    5 - Distancia em KM da viagem;
Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 2;

const precoGasolina = 1;

const tipoCombustivel = 'Etanol';

const kmporLitro = 3;

const distanciaKm = 50;


const litrosConsumidos = distanciaKm / kmporLitro;

if(tipoCombustivel === 'Etanol'){
  valorTotal= litrosConsumidos * precoEtanol;
  console.log('O valor Total do etanol é: R$ '+ valorTotal.toFixed(2));
} else {
    valorTotal = litrosConsumidos * precoGasolina;
    console.log('O valor total da gasolina é: R$ '+ valorTotal.toFixed(2));
}