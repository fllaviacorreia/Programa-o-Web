// /*Replicando conceitos da aula 09/09/2021 da disciplina Desenvolvimento Web - SI - UESB/JQ*/

// //Function que não possui nome declarado é chamada de função anônima

// const vetor = [1,2,3,4,5,6,7,8,9];

//  /*--------------------------------------------forEach--------------------------------------------*/
// console.log("passando por todos os elementos do vetor usando forEach");
// vetor.forEach(function(valor){
//      console.log(valor); // 1 2 3 4 5 6 7 8 9
// });

// // /*--------------------------------------------map--------------------------------------------*/
// console.log("\nusando map para multiplicar todos os elementos do vetor por um valor")
// //muito útil quando precisamos passar por todos os elementos de um Array e modificá-los
// const multiplica = vetor.map(function(valor){
//     return valor * 2;
// });
// console.log(multiplica); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

// /*--------------------------------------------filter--------------------------------------------*/
// //O Filter deve ser utilizado quando se tem necessidade de filtrar uma lista de acordo com algum critério
// console.log("\nusando filter para filtrar alguns elementos do vetor")
// const filtro = vetor.filter(function(valor){
//   return (valor % 2 === 0);
// //  console.log(valor%2 == 0);  // <- desse jeito o retorno é true/false
// //  console.log(valor%2 === 0); // <- desse jeito o retorno é o valor que satisfaz a condição
// });

// console.log(filtro); // [2, 4, 6, 8]

// /*--------------------------------------------find--------------------------------------------*/
// //O Find deve ser utilizado quando se tem necessidade de buscar um valor específico no conjunto de dados
// console.log("\nusando find para encontrar o elemento 5 do vetor")
// //se tiver dois valores iguais que se busca, ele retorna o primeiro achado
// const encontrar = vetor.find(function(valor){
//     return valor === 5;
// });

// console.log(encontrar); //  5

// /*--------------------------------------------every--------------------------------------------*/
// //O Every deve ser utilizado quando se tem necessidade de saber se todos os elementos de um Array respeitam uma dada condição.
// console.log("\nusando every para saber se todos os valores no vetor são < 10")
// const todos1 = vetor.every(function(valor){
//     return valor < 10; //aqui independe o uso de == ou ===, ambos retornam booleano
// });

// console.log(todos1); // true

// console.log("usando every para saber se todos os valores no vetor são > 10")
// const todos2 = vetor.every(function(valor){
//     return !valor > 10; //aqui independe o uso de == ou ===, ambos retornam booleano
// });

// console.log(todos2); // false

// /*--------------------------------------------some--------------------------------------------*/
// //O Some deve ser utilizado quando se tem necessidade de saber se pelo menos 1 valor específico está no conjunto de dados
// console.log("\nusando some para saber se existe o número 2 no vetor")
// //usando every para saber se existe o número 2 no vetor
// const ocorre1 = vetor.some(function(valor){
//     return valor == 2; 
// });
// console.log(ocorre1); // true

// console.log("usando some para saber se existe o número 10 no vetor")
// const ocorre2 = vetor.some(function(valor){
//     return valor == 10; 
// });
// console.log(ocorre2); // false

// /*--------------------------------------------reduce--------------------------------------------*/
// //Recebe dois parâmetros, o primeiro, como no exemplo, é uma função 
// //e o segundo vai ser o valor inicial do primeiro parâmetro da função, 
// //se deixar vazio, total recebe 0 por default
// console.log("\nusando reduce para somar todos os elementos do vetor")
// const soma = vetor.reduce(function(total, valor){
//     return total + valor;
// }, 0); //o 0 é opcional, caso não tenha nenhum valor, a função assume que a var total = 0;

// console.log(soma); // 45

// //usando reduce para pegar apenas uma das caracteristicas do objeto
// var pessoas = [
//     {nome:'joão', idade: 10},
//     {nome:'josé', idade: 20},
//     {nome:'marcos', idade: 30}
// ];

// var nomes = pessoas.reduce(function(arrayNomes, pessoa) {
//     arrayNomes.push(pessoa.nome);
//     return arrayNomes;
// }, []);

// console.log("\nUsando reduce para pegar apenas 1 característica do objeto, no caso nome");
// console.log(nomes); // ['joão', 'josé', 'marcos']

// /* ------------------- Arrow Functions: Melhorar a verbosidade da linguagem ------------------- */

// /**
//  * Antes:
//  * const novoArr = vetor.map(function(valor){
//  *    return valor * 2;
//  * });
//  * 
//  * console.log("");
//  * console.log(multiplica); // [2, 4, 6, 8, 10, 12, 14, 16, 18]
//  */

// /*  O que se pode fazer:
// 1. remover o nome function
// 2. adicionar =>
// 3. Como a função abaixo so possui 1 parâmetro, pode-se remover os parêntesis em valor
// 4. Dentro da função, possui apenas 1 linha de código, assim, pode-se remover as chaves e o return
// */

// //Depois:
// const novoArr = vetor.map(valor => valor * 2);

// console.log("\nArrFunction");
// console.log(novoArr); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

// //Usando Arrow Function como variável

// const arr = () => [1, 2, 3];

// //outra maneira
// /**
//  * const arr = () => {
//  *      return [1, 2, 3];
//  * }
//  */
// console.log("\nVariável que Recebe Função e Retorna um Array");
// console.log(arr()); //[1, 2, 3]

// /**
//  * Se a tiver retornando uma propriedade, tem que usar o return:
//  * const arr = () => {
//  *      return nome:"Julia";
//  * }
//  */

// /* ------------------- Functions: Default ------------------- */

// function soma2(a, b){
//     return a+b;
// }

// console.log("\nFunção soma sem modificações");
// console.log(soma2(2, 3));

// //setando valores no parâmetro caso não sejam passados a = 2 e b = 3 são valores default,caso não passe por parâmetro

// function soma3(a = 2, b = 4){
//     return a+b;
// }


// console.log("\nFunção soma com modificações");
// console.log("\npassando apenas o valor de a = 1");
// console.log(soma3(1)); //passando apenas o valor de a >>> 5

// console.log("\npassando apenas o valor de a = 3");
// console.log(soma3(3)); //passando apenas o valor de a >>> 7

// console.log("\npassando nenhum valor");
// console.log(soma3()); //passando nenhum valor >>> 6
 
/* ------------------------DESESTRUTURAÇÃO----------------------------*/
const usuario = {
    nome: "Juca",
    idade: "32",
    empresa: "UESB",
    endereco:{
        rua:"Rua A",
        cidade:"Paraíso"
    }
}

//o normal:
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

//ao invés de utilizar 3 linhas de código para pegar os dados, utiliza-se apenas 1 linha.
//dentro do {}, o nome tem que ser igual em usuario
// const {nome, idade, endereco:{cidade}} = usuario;

// console.log(idade);
// console.log(idade);
// console.log(cidade);

// //usando função (mais verbosa)
// function mostraNome(usuario){
//     console.log(usuario.nome);
// }

// mostraNome(usuario);

// //usando função menos verbosa
// function mostraNome2({nome}){
//     console.log(nome);
// }

// mostraNome(usuario);

/**
 * Rest
 */

// // usando o ...+ variavel, pega todos os valores e condensa, p.e. em resto ta condensado idade e endereco 
// const {nome, ...resto} = usuario;
// console.log(nome);
// console.log(resto);

// const arr = [1, 2, 3, 4]
// const [a, b, ...c] = arr;

// console.log(b);
// console.log(c);

// function soma4(a, b, c, d){
//     return a+b+c+d;
// }

// console.log(soma4(1,2,3,4));


// //aqui recebe N parâmetros
// function soma5( ...params){
//     return params.reduce((total, proximo) => total+proximo);
// }

// console.log(soma5(1,2,3,4,5,8));

// const usuario1 = usuario; //cópia de usuario
// console.log(usuario1);

// const usuario2 = {...usuario, nome: "Mica"} //copiando usuario e modificando nome  
// console.log(usuario2);

/**
 * TEMPLATE
 */

const pessoa = "Jana";
const idadeP = 23;

// //normal:
// console.log("Meu nome é "+pessoa+", minha idade é "+idadeP+" anos");

// //template:
// console.log(`Meu nome é ${pessoa}, minha idade é "${idadeP} anos`);

/**
 * SHORT
 */

// //modo mais verboso
// const usuario_short = {
//     pessoa: pessoa,
//     idadeP: idadeP,
//     empresa: "UESB"
// }
// console.log(usuario_short)

const usuario_short = {
    pessoa,
    idadeP,
    empresa: "UESB"
}

console.log(usuario_short)