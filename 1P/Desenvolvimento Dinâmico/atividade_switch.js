//Respostas para o input do cliente contendo uma inválida
var bebidas = ['Café','Leite','Chá','Refrigerante']

//Declaração da variável valor para atribuição futura
var valor = 0

//Teste para validar o switch com as possíveis respostas de bebidas
bebidas.forEach(bebida => {
  console.log(`Teste da resposta "${bebida}":`)

  //switch para validação e aplicação da regra da atividade prática
  switch(bebida){
    case "Café":
      valor = 5
      console.log(`Você escolheu ${bebida}. Valor a pagar: R$${valor.toFixed(2)}`)
      break;
    case "Leite":
      valor = 2
      console.log(`Você escolheu ${bebida}. Valor a pagar: R$${valor.toFixed(2)}`)
      break;
    case "Chá":
      valor = 3.50
      console.log(`Você escolheu ${bebida}. Valor a pagar: R$${valor.toFixed(2)}`)
      break;
    default:
      console.log('Você deve escolher entre Café, Leite ou Chá.');
  }
})