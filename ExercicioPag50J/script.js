let cont = 0;
let dividendo = Number(prompt("Digite o dividendo:"))
let divisor = Number(prompt("Digite o divisor:"))
let resto = dividendo
do {
  resto = resto - divisor;
  cont++;
} while (resto >= divisor)
if (cont > 1) {
  alert(`O divisor foi repetido ${cont} vezes \nO resto e ${resto}`)
} else {
  alert(`O divisor foi repetido ${cont} vezes \nO resto e ${resto}`)
}

