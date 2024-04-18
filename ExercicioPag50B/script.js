let cont = 1;
let presente = 0;
let passado = 0;
let validacao = 0;
do{
  validacao = cont % 2;
  if(validacao==0){
  passado = presente;
  presente = passado + cont;
  console.log(`${cont} + ${passado} = ${presente}`)}
  cont++;
} while(cont <= 500)