/**
 * Calculadora de Partidas Rankeadas
 * Autor: Aluno DIO
 * Objetivo: Calcular o saldo de vitórias e o nível do jogador
 */

function calcularNivel(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  let nivel = '';

  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  return { saldo, nivel };
}

function main() {
  console.log("=== Calculadora de Partidas Rankeadas ===");

  const vitoriasInput = prompt("Digite a quantidade de vitórias:");
  const derrotasInput = prompt("Digite a quantidade de derrotas:");

  const vitorias = parseInt(vitoriasInput);
  const derrotas = parseInt(derrotasInput);

  if (isNaN(vitorias) || isNaN(derrotas)) {
    console.log("Erro: Digite apenas números inteiros.");
    return;
  }

  const resultado = calcularNivel(vitorias, derrotas);
  console.log(`O Herói tem de saldo de **${resultado.saldo}** está no nível de **${resultado.nivel}**`);
}

main();