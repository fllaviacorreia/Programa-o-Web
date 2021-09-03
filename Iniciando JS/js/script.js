function createParagraph() {
    let para = document.createElement('p'); //criando variável localmente usando o let
    para.textContent = 'Você clicou no botão!'; //setando text para o parágrafo
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll('button'); //adicionando eventos a todos os botões do html
  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph); //chamando a função para adicionar 
                                                            // um parágrafo na página qual clica no botão
  }