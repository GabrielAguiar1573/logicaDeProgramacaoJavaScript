let cont = 1;
let validacao = 0;
do{validacao = cont % 4;
  if(validacao==0){
   console.log(`${cont} / 4 = ${cont/4}`); 
  }
  cont++;}
while(cont <=200)