// função que escreve meu nome
function escreveNome(nome){
    console.log("Meu nome é "+nome);
}
escreveNome("Isaque");


// função valida maior de idade
function validaMaiorIdade(idade){
    if (idade >=18) {
        console.log("Você é maior de idade!");
    } 
    else {
        console.log("Você é menor de idade!");
    }
}

validaMaiorIdade(11);

//Calcula juros da forma de pagamento

function calculaJurosFormaPagamento(precoEtiqueta, formaDePagamento){
    if (formaDePagamento === 1)
    {
        return precoEtiqueta * 10/100;
    }
    else if(formaDePagamento ===2)
    {
        return precoEtiqueta - (precoEtiqueta * 15/100);
    }
    else if(formaDePagamento ===3)
    {
        return precoEtiqueta;
    }
    else
    {
        return precoEtiqueta +(precoEtiqueta* 10/100);
    }
}

console.log("O valor do juros é de R$"+calculaJurosFormaPagamento(100, 1));

console.log("O valor do juros é de R$"+calculaJurosFormaPagamento(100, 2));

console.log("O valor do juros é de R$"+calculaJurosFormaPagamento(100, 3));

console.log("O valor do juros é de R$"+calculaJurosFormaPagamento(100, 4));

