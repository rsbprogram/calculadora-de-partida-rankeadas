/*
 
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadoresgit init
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

function calcularNiveisPorVitorias(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas; // Calcula o saldo
  let nivel;

  while (true) {
    if (vitorias < 10) {
      nivel = "Ferro";
      break;
    } else if (vitorias <= 20) {
      nivel = "Bronze";
      break;
    } else if (vitorias <= 50) {
      nivel = "Prata";
      break;
    } else if (vitorias <= 80) {
      nivel = "Ouro";
      break;
    } else if (vitorias <= 90) {
      nivel = "Diamante";
      break;
    } else if (vitorias <= 100) {
      nivel = "Lendário";
      break;
    } else {
      nivel = "Imortal";
      break;
    }
  }

  return { saldo: saldoVitorias, nivel };
}

// Testando todos os níveis
function testarTodosOsNiveis() {
  for (let vitorias = 0; vitorias <= 110; vitorias += 10) {
    const derrotas = Math.floor(vitorias / 2); // Simula derrotas para gerar saldo
    const resultado = calcularNiveisPorVitorias(vitorias, derrotas);
    console.log(
      `Vitórias: ${vitorias}, Derrotas: ${derrotas} => Saldo: ${resultado.saldo}, Nível: ${resultado.nivel}`
    );
  }
}

// Chama a função de teste
testarTodosOsNiveis();
