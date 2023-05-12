/*

Faça um programa para calcular o valor gasto de combustivel em uma viagem

você terá 3 variaveis:
    1 - preço combustivel
    2 - valor médio de gasto do combustivel
    3 - distancia em km

imprima no console o valor que será gsto de combustivel para realizar esta viagem

*/

var precoCombustivel = 5;

var kmPorLitros = 5;

var distancia = 5; 

var litrosConsumidos = distancia / kmPorLitros ;

var valorTotal = litrosConsumidos * precoCombustivel;


console.log(valorTotal);