// Exemplo de classe com herança
class List{
    constructor(){
        this.data = []
    }
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

// class ToList extends List{
//     constructor(){
//         super();
//         this.usuario = "lucas"
//     }
//     getUsuario(){
//         console.log(this.usuario)
//         alert("log")

//     }

//     static soma(a,b){
//         console.log(a+b)

//     }

// }

class Info extends List{
    constructor(){
        super();

    }
    static med(a, b, c){

        a = parseFloat(document.getElementById("nota1").value);
        b = parseFloat(document.getElementById("nota2").value);
        c = parseFloat(document.getElementById("nota3").value);
        var medi = ((a+b+c)/3);
        document.getElementById("media").value = medi; 
    }
}

//instacia a classe
//var todo = new ToList();
var dado = new Info();

document.getElementById("calculo").onclick = function(){
    Info.med(document.getElementById("nota1").value, document.getElementById("nota2").value, document.getElementById("nota3").value);
    
}
