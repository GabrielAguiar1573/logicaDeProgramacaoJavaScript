let dolares, reais, cotacao;

cotacao = parseFloat(prompt("Insira o valor da cotação do Dólar atual:"));
dolares = parseFloat(prompt("Qual a quantidade de Dólares você deseja converter?"));

reais = cotacao * dolares;

alert("Considerando que você tenha $" + dolares + ", ao fazer a conversão você terá R$" + reais);
