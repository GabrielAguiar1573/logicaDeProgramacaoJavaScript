let duracao = parseInt(prompt("Digite o tempo de duração da viagem (em horas):"))
let velocidade = parseFloat(prompt("Digite a velocidade média da viagem (em km/h):"))

let distancia = duracao*velocidade
let litros = distancia/12
alert(`Tempo gasto: ${duracao} hora(s) \nVelocidade média: ${velocidade} km/h \nDistância percorrida: ${distancia} km \nConsumo de combustível: ${litros} L`)