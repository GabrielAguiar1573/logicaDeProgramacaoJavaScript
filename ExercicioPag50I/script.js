let numero;
let menor = 0;
let maior = 0;
do {
  numero = Number(prompt("Digite um numero:"));
  if (numero > maior) {
    maior = numero;
  } else if ((numero < maior) && (numero > (-1))) {
    menor = numero;
  }
} while (numero > 0)
alert(`Maior: ${maior} Menor: ${menor}`)