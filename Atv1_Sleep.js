/**
 * @param {number} millis
 * @return {Promise}
 */

const readline = require('readline'); // Isso aqui faz eu poder ler as linhas do codigo para ("coletar elas")

const rl = readline.createInterface({ //Estou importando o input e output
    input: process.stdin,
    output: process.stdout
});

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

rl.question("Digite um valor para x: ", async (answer) => {
    let x = parseInt(answer); // Converte a entrada para um número inteiro
    console.log("O valor de x é:", x);
    
    await sleep(x); // Chama a função sleep com o valor fornecido
    console.log(`Aguardei ${x} milissegundos.`);
    rl.close(); // Fecha a interface de leitura
});




/*
Dado um número inteiro positivo millis, escreva uma função assíncrona que "durma" por millis milissegundos. Ela pode resolver qualquer valor.

Exemplo 1:

Entrada: millis = 100
Saída: 100
Explicação: Deve retornar uma promessa que se resolve após 100ms.

javascript
Copiar código
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Exemplo 2:

Entrada: millis = 200
Saída: 200
Explicação: Deve retornar uma promessa que se resolve após 200ms.

Restrições:

1 <= millis <= 1000

*/


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */