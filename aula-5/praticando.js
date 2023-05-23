/*
Crie uma classe para representar  carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Km rodado.
Crie  um metodo  que dado a quantidade de km e o preço do combustivel nos de  o valor  gasto em reais para realizar este percusso.
*/

class Carro{
     marca;
     cor; 
     gasto_medio_km;

     constructor(marca, cor, gasto_medio_km){
        this.marca = marca;
        this.cor = cor;
        this.gasto_medio_km = gasto_medio_km; //valor dividido pelo km
     }

     calcula_Valor_gasto_Km(distancia, preco_combustivel) {
        return distancia * preco_combustivel * this.gasto_medio_km;
     }


}

const corola = new Carro("Toyota", "Azul", 1/10)

console.log("O valor total é R$ "+ corola.calcula_Valor_gasto_Km(10,5,));

const palio = new Carro()

palio.cor = "preto";

console.log(palio.cor);