/*Replicando conceitos da aula 02/09/2021 da disciplina Desenvolvimento Web - SI - UESB/JQ*/

/*---------------------------------------------------------------------------------------------------------------*/
/**
 * Primeira versão do código - criando uma classe
 */
// class List{ //classe
//     constructor(){ 
//         this.dado = [];
//     }

//     //função para adicionar uma mensagem no objeto 'dado'
//     addDado(msg){
//         this.dado.push(msg); //adicionando mensagem no array
//         console.log(this.dado);
//     }
// }

// var lista = new List;

// //adicionando ação no botão do arquivo html
// document.getElementById("novodado").onclick = function(){
//     lista.addDado("Ana");
// }


/*---------------------------------------------------------------------------------------------------------------*/
/**
 * Segunda versão do código - utilizando herança entre classes
 */

// class List{ //classe pai
//     constructor(){ 
//         this.dado = [];
//     }

//     //função para adicionar uma mensagem no objeto 'dado'
//     addDado(msg){
//         this.dado.push(msg); //adicionando mensagem no array
//         console.log(this.dado);
//     }
// }

// class ToList extends List{ //classe filho - herança
//     constructor(){
//         super(); //usado para chamar o construtor da classe List
//         this.usuario = "Ana";
//     }

//     //imprimindo no console a variável usuário
//     getUsuario(){
//         console.log(this.usuario);
//     }
// }

// const toList = new ToList;

// //adicionando ação no botão do arquivo html
// document.getElementById("novodado").onclick = function(){
//     toList.addDado("Ana 1"); //adicionando na variável dado
//     toList.getUsuario(); //imprimindo o valor da variável usuario
// }

/*---------------------------------------------------------------------------------------------------------------*/
/**
 * Terceira versão do código - Utilizando método estático
 */
//// classe pai
// class List{ 
//     constructor(){ 
//         this.dado = [];
//     }

//     // função para adicionar uma mensagem no objeto 'dado'
//     addDado(msg){
//         // adicionando mensagem no array
//         this.dado.push(msg); 

//         console.log(this.dado);
//     }
// }

//// classe filho - herança
// class ToList extends List{ 
//     constructor(){
//         // usado para chamar o construtor da classe List
//         super(); 

//         this.usuario = "Ana";
//     }

//     // imprimindo no console a variável usuário
//     getUsuario(){
//         console.log(this.usuario);
//     }

//     // utilizando método estático sem que precise instanciar uma função
//     static soma(a, b){
//         return a+b;
//      }
// }
//// o resultado da utilização do método estático pode ser visto no console: 7
// console.log(ToList.soma(4,3)); 

/*---------------------------------------------------------------------------------------------------------------*/
/**
 * Quarta versão do código - Utilizando constantes (var, cons, let)
 */
// variável global vista em todo o código
var nome = "Maria"; 

// variável com a propriedade de não modificar seu valor
const nome1 = "Isa"; 

// adicionando propriedades em um objeto
const u = {nome: "Joana", idade: "25"}; 
console.log(u.nome);

//modificando seu valor
u.nome = "outro_nome";
console.log(u.nome);

 function teste(x){
    //variável local, vista apenas dentro do escopo da função
    let y = 4 
    console.log("y = ",y);
    if(x > 4){
        y = 6;
    }

    console.log("x = ",x, "y = ",y);
}

//imprime undefined
console.log(teste(10));

//erro: y is not defined
//console.log(y);