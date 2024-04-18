let altura, largura, comprimento, volume;

altura = parseFloat(prompt("Insira a altura da caixa retangular:"));
largura = parseFloat(prompt("Insira a largura da caixa retangular:"));
comprimento = parseFloat(prompt("Por último, insira o comprimento da caixa retangular:"));

volume = altura * largura * comprimento;
alert("O volume da caixa retangular é " + volume);
