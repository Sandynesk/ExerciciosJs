// Esa atividade apenas consiste em um treino para eu entender algumas syntaxes basicas.


const readline = require('readline'); // Isso aqui faz eu poder ler as linhas do codigo para ("coletar elas")

const rl = readline.createInterface({

    input: process.stdin, // importando o input
    output: process.stdout // importando o output

});

rl.question("Estou fazendo um teste para somar, dividir, multiplicar e subitrair dois numeros\nDigite o primeiro numero:\n", async (resposta) => {
    
    let x = parseFloat(resposta);
    rl.question("Agora digite o segundo numero:\n", async (resposta2) => {
        let y = parseFloat(resposta2);
        console.log(`Soma: ${x + y}`);
        console.log(`Subtração: ${x - y}`);
        console.log(`Multiplicação: ${x * y}`);
        console.log(`Divisão: ${x / y}`);
        
        rl.close();
    });
});
