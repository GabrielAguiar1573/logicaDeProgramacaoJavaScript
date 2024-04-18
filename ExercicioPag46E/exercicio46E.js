let contadora = 0
let acumuladora = 1

/* console.log(acumuladora)

while (contadora < 15) {
    acumuladora = acumuladora * 3
    console.log(acumuladora)
    contadora++
} */

/* console.log{`3 ^ 0 = ${acumuladora}`}
 */

while (contadora<=15){
    console.log(`3 ^ ${contadora} = ${acumuladora}`)
    acumuladora = acumuladora * 3
    contadora++
}