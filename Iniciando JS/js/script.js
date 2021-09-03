// Função: Cria um novo parágrafo e o insere no fim do arquivo HTML.
function createParagraph() {
    let para = document.createElement('p'); //criando variável localmente usando o let
    para.textContent = 'Você clicou no botão!'; //setando text para o parágrafo
    document.body.appendChild(para);
  }
  
/*
  Ordem de acontecimentos:
  
  1. Captura referências de todos os botões na página e armazena isso em um array.
  2. Vai até todos os botões e adiciona um event listener click a cada um deles.

  Quando cada botão é clicado, a função criarParagrafo() será executada.
*/

  const buttons = document.querySelectorAll('button'); //adicionando eventos a todos os botões do html
  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph); //chamando a função para adicionar 
                                                            // um parágrafo na página qual clica no botão
  }