let contadora=1
let valor
let resultado

valor=parseInt(prompt("Digite um valor:"))

while(contadora<11){
    resultado=valor*contadora
    console.log(`${valor} * ${contadora} = ${resultado}`)

    contadora++
}