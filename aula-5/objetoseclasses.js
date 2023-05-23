const isaque = {
    nome: "Isaque Rodrigues Rocha",
    idade: 21,

}; // um objeto funciona atraves de chave e valor

console.log(isaque.nome);
console.log(isaque.idade);
console.log(isaque);

isaque.altura = 1.69;

console.log(isaque);

// um objeto no JavaScript é uma coleção dinamica de chave e valor

const exemplo = {
    nome: "exemplo 1",
    idade: 2,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
exemplo.descrever();


// classe

class pessoa {
    nome;
    idade;
    altura;

    constructor(){
        this.nome = 'padrão';
        this.idade = '1';
        this.altura = '1';
    }

    descreve(){
        console.log(`Meu nome é ${this.nome} minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }
}

const samara = new pessoa();

console.log(samara);

samara.nome = "Samara magalhães";
samara.idade = 22;
samara.altura = 1.62;

console.log(samara);

samara.descreve();

const novapessoa = new pessoa();

novapessoa.descreve();