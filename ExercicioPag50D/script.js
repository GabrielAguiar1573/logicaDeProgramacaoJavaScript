let grao = 1;
let grao_total;
let cont = 1;
do{
 grao_total = grao * 2 - 1;
  console.log(`numero casa: ${cont}`);
  console.log(`numero de grao adicionado: ${grao}`);
  console.log(`total: ${grao_total}`);
  console.log(``);
  cont++;
  grao = grao * 2;
}while(cont <= 64)