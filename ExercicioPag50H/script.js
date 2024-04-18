let comodo = prompt("Digite o nome do comodo: ");
let largura = Number(prompt("Digite a largura do comodo: "));
let comprimento = Number(prompt("Digite o comprimento do comodo: "));
let area = largura * comprimento;
let soma = 0;
soma = soma + area;
let opcao = prompt("Deseja continuar? (S - sim/ N - nao)");
if ((opcao == "S") || (opcao == "s")) {
  do {
    comodo = prompt("Digite o nome do comodo: ");
    largura = Number(prompt("Digite a largura do comodo: "));
    comprimento = Number(prompt("Digite o comprimento do comodo: "));
    area = largura * comprimento;
    soma = soma + area;
    opcao = prompt("Deseja continuar? (S - sim/ N - nao)");
  } while ((opcao == "S") || (opcao == "s"))
  alert("A area total da residencia e: " + soma)
} else {
  alert("A area total da residencia e: " + soma)
}