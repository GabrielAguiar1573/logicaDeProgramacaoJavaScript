let contadora = 1
let soma = 0

while (contadora < 501){
    if (contadora%2==0){
        soma = soma + contadora
        console.log (`${contadora}`)
    }
    contadora++
}

console.log (`A soma dos números pares entre 1 e 500 é: ${soma}`)