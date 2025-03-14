const prompt = require("prompt-sync")();

var i, j, lin, col;
var jogadas = 0;
var jogador = "o";
var vencedor = " ";
var fimJogo = false;
var tab = [3];
//(a)
for (let i = 0; i < 3; i++) {
  tab[i] = [];
  for (let j = 0; j < 3; j++) {
    tab[i][j] = " ";
  }
}

while (jogadas < 9 && fimJogo == false) {
  //(b)
  lin = parseInt(prompt(`${jogador} em [linha]: `));
  col = parseInt(prompt(`${jogador} em [coluna]: `));
  //(c)
}
//(d)
if (vencedor == " ") {
  console.log("empate\n");
} else {
  console.log(`${vencedor} venceu`);
}
