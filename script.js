// ## Magic 8-Ball

// Concentre-se em uma pergunta de Sim / Não que você precisa muito da resposta e clique na Bola 8 Mágica para saber seu destino.

// Leia: [Magic 8-Ball](https://en.wikipedia.org/wiki/Magic_8-Ball)
// **Dica:** A [sentença switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch) pode ser muito útil aqui!

// ![](https://upload.wikimedia.org/wikipedia/commons/8/85/Magic_8_Ball_-_Instrument_Of_Evil%3F_%282426454804%29.jpg)Faça o push do código para o seu repositório GitHub e 
// implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages:
//  (ex: https://nomedeusuario.github.io/katas2) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.



let YesOrNo = Math.round(Math.random())



function YON (YesOrNo){
     if (YesOrNo === 0){
        return "Yes"
    } else {
        return "No"
    }
}

const expr = YON();
switch (expr) {
  case 'Yes':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);

// Math.round(Math.random() * 3 + 1)

// It is certain.
// ● It is decidedly so.
// ● Without a doubt.
// ● Yes definitely.
// ● You may rely on it.

// ● As I see it, yes.
// ● Most likely.
// ● Outlook good.
// ● Yes.
// ● Signs point to yes.

// "Reply hazy, try again."
// "Ask again later."
// "Better not tell you now."
// "Cannot predict now."
// "Concentrate and ask again."

// "Don't count on it."
// "My reply is no."
// ● My sources say no.
// ● Outlook not so good.
// ● Very doubtful.

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}