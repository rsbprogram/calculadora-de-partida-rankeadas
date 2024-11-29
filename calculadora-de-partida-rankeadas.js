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
