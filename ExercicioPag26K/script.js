let dolares, reais, cotacao;

cotacao = parseFloat(prompt("Insira o valor da cotação do Real em relação ao Dólar atualmente:"));
reais = parseFloat(prompt("Qual a quantidade de Reais você deseja converter?"));

dolares = reais / cotacao;

alert("Considerando que você tenha R$" + reais + ", ao fazer a conversão você terá $" + dolares);
