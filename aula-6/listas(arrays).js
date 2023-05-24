const aluno = {nome: "joão"} // {} objeto literal [] uma lista

const exemplo = ['', '', '']; // exmeplo de lista string


exemplo.push(''); // adiciona uma variavel a lista 
exemplo.pop(); // remove uma variavel da lista
console.log(exemplo.length);
exemplo[4] = ''; // muda diretamente no indice


// estrutura de repetição

/* exmplicando a estrutura
for (Primeiro declaração da variavel i=0;condicional i<10; incremento ou "faça" i++){

}
*/

//exemplo

const nome ="Isaque Rodrigues Rocha";

for (let i=0; i<nome.length;i++){
    console.log(nome[i]);
}

//exemplo 2

const notas =[];

notas.push(5);
notas.push(5);
notas.push(6);
notas.push(9);

let soma = 0;

for (let i=0; i<notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
    media = soma/notas.length;
}

console.log(media);