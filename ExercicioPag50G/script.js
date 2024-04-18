let cont = 0;
let fatorial = 1;
let impar;
let anterior;
do {
  impar = cont % 2;
  if (impar != 0) {
    anterior = fatorial;
    fatorial = fatorial * cont;
    console.log(`${anterior} * ${cont} = ${fatorial}`);
  }
  cont++;
} while (cont < 10)