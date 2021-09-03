/*
    Pedido do cliente:
    Quero que você crie um jogo simples do tipo adivinhe um número. 
    Ele deve gerar um número aleatório de 1 a 100, depois desafiar 
    o jogador a adivinhar o número em 10 rodadas. A cada rodada 
    deve ser dito ao jogador se ele está certo ou errado, 
    se estiver errado, deve ser dito se o palpite é muito baixo ou muito alto. 
    Também deve ser mostrado ao jogador os números que ele tentou adivinhar anteriormente. 
    O jogo termina se o jogador acertar o número ou acabarem o número de tentativas. 
    Quando o jogo acabar, deve ser dado ao jogador a opção de jogar novamente.
*/


//Variáveis
var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;

// Função que verifica o palpite
function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value); // pegando o valor digitado pelo usuário
  if (contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: '; // iniciando o parágrafo no html
  }

  palpites.textContent += palpiteUsuario + ' '; // concatenando o valor dado pelo usuário

  // condição que verifica se o usuário acertou
  if (palpiteUsuario === numeroAleatorio) {

    //modificando valores no html
    ultimoResultado.textContent = 'Parabéns! Você acertou!'; 
    ultimoResultado.style.backgroundColor = 'green';
    baixoOuAlto.textContent = '';

    //chamada para função de fim de jogo
    configFimDeJogo();
  } 
  
  // condição que verifica se o número de palpites dados foi igual a 10
  else if (contagemPalpites === 10) {
    //modificando valores no html
    ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
    baixoOuAlto.textContent = '';

    //chamada para função de fim de jogo
    configFimDeJogo();
  } 
  
  // condição que verifica se o usuário errou
  else {

    //modificando valores no html
    ultimoResultado.textContent = 'Errado!';
    ultimoResultado.style.backgroundColor = 'red';

    //verificando se o valor é muito baixo ou muito alto
    if(palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
    } 
    
    else if(palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito alto!';
    }
  }

  
  contagemPalpites++;
  campoPalpite.value = '';
  campoPalpite.focus();
}

envioPalpite.addEventListener('click', conferirPalpite);

// Função quando o jogo acaba
function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}


// Função que reinicia as variáveis do jogo
function reiniciarJogo() {
    contagemPalpites = 1;
  
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }
  
    botaoReinicio.parentNode.removeChild(botaoReinicio);
  
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
  
    ultimoResultado.style.backgroundColor = 'white';
  
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
  