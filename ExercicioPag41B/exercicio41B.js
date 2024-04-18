let valor

valor=parseInt(prompt("Digite um valor:"))

if (valor<0){
    resultado=valor*-1
    alert(`Imprimir somente valores positivos: ${resultado}`)
}
else{
    alert(`Imprimir somente valores positivos: ${valor}`)
}