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
  for (let i = 0; i < 3; i++) {
    console.log(
      "[" + tab[i][0] + "]" + "[" + tab[i][1] + "]" + "[" + tab[i][2] + "]"
    );
    for (let j = 0; j < 3; j++) {}
  }
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
