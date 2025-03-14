const prompt = require("prompt-sync")();

var jogadas = 0;
var jogador = "o";
var vencedor = " ";
var fimJogo = false;
var tab = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

function exibirTabuleiro() {
  for (let i = 0; i < 3; i++) {
    console.log(`[${tab[i][0]}][${tab[i][1]}][${tab[i][2]}]`);
  }
}

function verificarVencedor() {
  // Verifica linhas, colunas e diagonais
  for (let i = 0; i < 3; i++) {
    if (tab[i][0] === jogador && tab[i][1] === jogador && tab[i][2] === jogador)
      return true; // Linhas
    if (tab[0][i] === jogador && tab[1][i] === jogador && tab[2][i] === jogador)
      return true; // Colunas
  }
  if (
    (tab[0][0] === jogador && tab[1][1] === jogador && tab[2][2] === jogador) ||
    (tab[0][2] === jogador && tab[1][1] === jogador && tab[2][0] === jogador)
  )
    return true; // Diagonais
  return false;
}

while (jogadas < 9 && !fimJogo) {
  exibirTabuleiro();
  let lin, col;

  while (true) {
    lin = parseInt(prompt(`${jogador} em [linha]: `));
    col = parseInt(prompt(`${jogador} em [coluna]: `));

    if (lin < 0 || lin > 2 || col < 0 || col > 2) {
      console.log("Coordenadas inválidas! Escolha entre 0 e 2.");
      continue;
    }
    if (tab[lin][col] !== " ") {
      console.log("Posição já ocupada! Escolha outra.");
      continue;
    }
    break;
  }

  tab[lin][col] = jogador;
  jogadas++;

  if (verificarVencedor()) {
    fimJogo = true;
    vencedor = jogador;
  } else {
    jogador = jogador === "o" ? "x" : "o"; // Alterna jogador
  }
}

exibirTabuleiro();
console.log(vencedor === " " ? "Empate!" : `${vencedor} venceu!`);
