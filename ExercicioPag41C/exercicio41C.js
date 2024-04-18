let nota1, nota2, nota3, nota4, media

nota1=parseInt(prompt("Digite sua primeira nota:"))
nota2=parseInt(prompt("Digite sua segunda nota:"))
nota3=parseInt(prompt("Digite sua terceira nota:"))
nota4=parseInt(prompt("Digite sua quarta nota:"))

media=(nota1+nota2+nota3+nota4)/4

if (media>=5){
    alert(`Aprovado! Sua média foi: ${media}`)
}else{
    alert(`Reprovado! SUa média foi: ${media}`)
}