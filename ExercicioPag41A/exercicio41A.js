let valor1, valor2, resultado

valor1=parseFloat(prompt("Digite o primeiro valor:"))
valor2=parseFloat(prompt("Digite o segundo valor:"))

if (valor1>valor2){
    resultado=valor1-valor2
    alert(`Diferença do maior pelo menor: ${resultado}`)
}
else{
    resultado=valor2-valor1
    alert(`Diferença do maior pelo menor: ${resultado}`)
}