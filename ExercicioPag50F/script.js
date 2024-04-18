let cont = 0;
let soma = 0;
let numero;
let media;
let converter;
do {
  numero = parseFloat(prompt("Digite um numero: "));
  soma = soma + numero;
  if (numero < 0) {
    converter = numero * (-1)
    soma = soma + converter;
  } cont++;
} while (numero > 0)
cont--;
media = soma / cont;
alert(`A soma dos numeros e: ${soma} \nA media dos numeros e: ${media} \nA quantidade de numeros foram: ${cont}`)